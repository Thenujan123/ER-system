import { z } from "zod";
import { CreateOrganizationSchema } from "@/app/Schemas/organization.schema";
const RegisterUserSchema = z
  .object({
    organizationName: CreateOrganizationSchema.shape.name,
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long")
      .max(50, "First name must be at most 50 characters long")
      .regex(
        /^[A-Za-z\s-]+$/,
        "First name can only contain letters, spaces, and hyphens"
      ),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters long")
      .max(50, "Last name must be at most 50 characters long")
      .regex(
        /^[A-Za-z\s-]+$/,
        "Last name can only contain letters, spaces, and hyphens"
      ),

    email: z
      .string()
      .max(255, "Email must be at most 255 characters long")
      .email("Invalid email format")
      .transform((email) => email.toLowerCase()),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[\W_]/, "Password must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .refine((date) => date.password === date.confirmPassword, {
    path: ["confirmPassword"],
    message: "password not match",
  });

export { RegisterUserSchema };
