import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string('O nome é obrigatório')
    .min(2, 'O nome deve ter no mínimo 2 caracteres')
    .max(100, 'Não pode ter mais de 100 caracteres')
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, 'O nome deve conter apenas letras'),
  email: z.string('O e-mail é obrigatório').email('Email inválido'),
  phone: z.string('O telefone é obrigatório').min(15, 'No minimo 15 caracteres').max(15),
  birthdate: z
    .string('A data de nascimento é obrigatória')
    .min(10, 'Data inválida')
    .max(10, 'Data inválida'),
  message: z
    .string('A mensagem é obrigatória')
    .min(10, 'Mensagem muito curta')
    .max(500, 'Mensagem muito longa'),
})
