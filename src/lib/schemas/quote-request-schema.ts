import { z } from 'zod';

export const QuoteRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
    .max(100, { message: 'Nome não pode exceder 100 caracteres' }),

  phoneNumber: z
    .string()
    .trim()
    .refine(
      (value) => {
        const digitsOnly = value.replace(/\D/g, '');
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      },
      {
        message: 'Número de telefone deve ter entre 10 e 15 dígitos',
      },
    ),

  email: z.string().trim().toLowerCase().email({ message: 'Endereço de e-mail inválido' }),
});

export type QuoteRequest = z.infer<typeof QuoteRequestSchema>;
