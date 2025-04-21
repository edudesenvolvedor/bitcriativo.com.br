import { z } from 'zod';

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
    .max(100, { message: 'O nome deve ter no máximo 100 caracteres' }),

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

  message: z
    .string()
    .min(5, { message: 'A mensagem deve ter pelo menos 5 caracteres' })
    .max(1000, { message: 'A mensagem é muito longa' }),
});

export type Contact = z.infer<typeof ContactSchema>;
