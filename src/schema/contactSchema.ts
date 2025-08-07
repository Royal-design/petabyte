import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "First name is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?\d{10,15}$/, "Invalid phone number"),
  email: z.email("Invalid email"),
  address: z.string().min(1, "Address is required"),
  message: z.string().min(3, "Message must be at least 3 characters long"),
});

export type ContactType = z.infer<typeof contactSchema>;
