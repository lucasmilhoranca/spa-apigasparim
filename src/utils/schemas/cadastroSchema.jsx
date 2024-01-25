import { z } from "zod"

export const pessoaSchema = z.object({
    cpf: z.string()
        .min(10, "O CPF deve ter 11 dígitos")
        .max(11, "O CPF deve ter 11 dígitos")
        .refine(value => !/^\s*$/.test(value), { message: "O CPF não pode ser vazio" })
        .refine(value => /^[0-9]+$/.test(value), { message: "O CPF deve conter apenas números" }),
    nome: z.string().min(3, "O nome deve ter pelo menos 3 letras"),
    sobrenome: z.string().min(3, "O sobrenome deve ter pelo menos 3 letras"),
    setor: z.string().refine(value => value === "Sementes" || value === "Nutrição"),
    departamento: z.string().min(1, "O departamento deve ter pelo menos 1 letra"),
})

export const funcionarioSchema = pessoaSchema.extend({
    cargo: z.string()
})

export const caminhoneiroSchema = pessoaSchema.extend({
    placa: z.string(),
    empresa: z.string()
})

export const visitanteSchema = pessoaSchema.extend({
    pessoaResponsavel: z.string()
})