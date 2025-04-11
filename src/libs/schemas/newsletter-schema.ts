import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'O e-mail é obrigatório.' })
    .email({ message: 'Digite um e-mail válido.' }),
});

export type Newsletter = z.infer<typeof newsletterSchema>;
