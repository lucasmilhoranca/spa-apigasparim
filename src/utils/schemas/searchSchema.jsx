import { z } from "zod"

export const searchSchema = z.object({
    cpf: z.string()
        .min(10, "O CPF deve ter 11 dígitos")
        .max(11, "O CPF deve ter 11 dígitos")
        .refine(value => !/^\s*$/.test(value), { message: "O CPF não pode ser vazio" })
        .refine(value => /^[0-9]+$/.test(value), { message: "O CPF deve conter apenas números" }),
})

