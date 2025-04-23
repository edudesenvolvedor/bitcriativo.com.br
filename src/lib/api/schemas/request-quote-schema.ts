import { z } from 'zod';

export const RequestQuoteSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .refine((name) => name.trim()),

  phone_number: z
    .string()
    .min(10, { message: 'Phone number must have at least 10 digits' })
    .refine((phone) => /^[\d\s\-+()]+$/.test(phone), {
      message: 'Phone number should contain only digits, spaces, hyphens, or parentheses',
    }),

  email: z
    .string()
    .email({ message: 'Please provide a valid email address' })
    .toLowerCase()
    .refine((email) => !email.endsWith('@example.com'), {
      message: 'Please use a valid email, not an example domain',
    }),
});

export type RequestQuote = z.infer<typeof RequestQuoteSchema>;
