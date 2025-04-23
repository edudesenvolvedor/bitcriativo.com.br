import { z } from 'zod';

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name cannot exceed 100 characters' })
    .trim()
    .refine((name) => /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(name), {
      message: 'Name should contain only letters and spaces',
    }),

  phoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(15, { message: 'Phone number cannot exceed 15 digits' })
    .refine((phone) => /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(phone), {
      message: 'Phone number should be in format (99) 99999-9999',
    }),

  email: z.string().email({ message: 'Please enter a valid email address' }).trim().toLowerCase(),

  subject: z
    .string()
    .min(3, { message: 'Subject must be at least 3 characters long' })
    .max(120, { message: 'Subject cannot exceed 120 characters' })
    .trim()
    .optional()
    .default('Website Contact'),

  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(2000, { message: 'Message cannot exceed 2000 characters' })
    .trim(),
});

export type Contact = z.infer<typeof ContactSchema>;
