import { z } from "zod";

const CreateOrganizationSchema = z.object({
  name: z
    .string({ required_error: "Organization name is required" })
    .min(2, { message: "Organization name must be at least 2 characters long" })
    .max(50, {
      message: "Organization name must be at most 50 characters long",
    })
    .regex(
      /^[A-Za-z0-9\s-]+$/,
      "Organization name can only contain letters, numbers, spaces, and hyphens"
    ),
});

export { CreateOrganizationSchema };
