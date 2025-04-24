import { RegisterUserSchema } from "@/app/Schemas/user.schema";
import { NextRequest, NextResponse } from "next/server";
import { handleError } from "../../helpers/handleError";
import { hash } from "argon2";
import prisma from "@/app/lib/prisma";
import { UserRole, UserStatus } from "@/app/generated/prisma";
import { OWNER_PERMISSION } from "../permission";
import generateToken, { IJWTpayload } from "../../helpers/generateToken";
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const validatedData = RegisterUserSchema.parse(body);
    const { firstName, lastName, email, organizationName, password } =
      validatedData;
    const hasedPassword = await hash(password);
    const isOrganizationExist = await prisma.organization.findUnique({
      where: { name: organizationName },
    });
    if (isOrganizationExist) {
      return NextResponse.json({
        success: false,
        code: "Organization-duplicated",
        message: "Organization with this name already exist",
      });
    }
    const isEmailExist = await prisma.user.findUnique({
      where: { email: email },
    });
    if (isEmailExist) {
      return NextResponse.json({
        success: false,
        code: "email-duplicated",
        message: "email with this name already exist",
      });
    }
    const results = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hasedPassword,
        },
      });
      const organization = await tx.organization.create({
        data: {
          ownerId: user.id,
          name: validatedData.organizationName,
        },
      });
      const organizationMember = await prisma.organizationMembers.create({
        data: {
          userId: user.id,
          organizationId: organization.id,
          role: UserRole.OWNER,
          permissions: OWNER_PERMISSION,
        },
      });

      return { user, organization, organizationMember };
    });

    const token = generateToken<IJWTpayload>({
      id: results.user.id,
      organization: [results.organizationMember],
    });

    const userResponse = {
      id: results.user.id,
      email: results.user.email,
      firstName: results.user.firstName,
      lastName: results.user.lastName,
      token,
    };
    return NextResponse.json(
      {
        success: true,
        data: {
          user: userResponse,
          organization: {
            id: results.organization.id,
            name: results.organization.name,
          },
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return handleError({ error, defaultError: "failed to create user" });
  }
};
