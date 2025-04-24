import { NextRequest, NextResponse } from "next/server";
import { verify as verfyPassword } from "argon2";
import generateToken from "../../helpers/generateToken";
import { JwtPayload } from "jsonwebtoken";
import { handleError } from "../../helpers/handleError";
import { LoginUserSchema } from "@/app/Schemas/login.user.schema";
import prisma from "@/app/lib/prisma";
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { email, password } = LoginUserSchema.parse(body);
    const user = await prisma.user.findUnique({
      where: { email },
      include: { OrganizationMembers: true },
    });
    const invalidCredentialsResponse = NextResponse.json(
      {
        succes: false,
        error: {
          code: "INVALID_CREDENTIALS",
          message: "invalid email Or Password",
        },
      },
      { status: 401 }
    );
    if (!user) {
      return invalidCredentialsResponse;
    }

    const isPasswordValid = await verfyPassword(user.password, password);
    if (!isPasswordValid) {
      return invalidCredentialsResponse;
    }
    const token = generateToken<JwtPayload>({
      id: user.id,
      organizations: user.OrganizationMembers,
    });

    const { password: _, ...UserData } = user;

    return NextResponse.json(
      {
        succes: true,
        data: {
          user: UserData,
          token,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError({ error, defaultError: "failed to authenticate User" });
  }
};
