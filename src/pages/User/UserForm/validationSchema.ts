import { validateCPF } from '@utils/validateCPF';
import { z } from 'zod';

export const validationSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  cpf: z.string().refine((value) => validateCPF(value), {
    message: 'CPF inválido',
  }),
  email: z.string().email('Email inválido'),
  phone: z
    .string()
    .min(10, 'O telefone deve ter pelo menos 10 dígitos')
    .max(11, 'O telefone pode ter no máximo 11 dígitos')
    .regex(/^[0-9]+$/, 'O telefone deve conter apenas números'),
  address: z.string().min(1, 'Endereço é obrigatório'),
});
