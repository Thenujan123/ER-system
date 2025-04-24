import { z } from "zod";

const LoginUserSchema = z.object({
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
});

export { LoginUserSchema };
