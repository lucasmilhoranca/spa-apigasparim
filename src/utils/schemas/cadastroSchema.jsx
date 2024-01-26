import { z } from "zod"

const tiposPermitidos = ["Funcionário", "Caminhoneiro", "Visitante"];

const setoresPermitidos = ["Sementes", "Nutrição"];

const departamentosPermitidos = [
    "Almoxarifado",
    "Cobrança",
    "Compras",
    "Contabilidade",
    "Desenvolvimento",
    "Diretoria",
    "Financeiro",
    "Logística",
    "Marketing",
    "Produção",
    "RH",
    "Vendas",
];

export const pessoaSchema = z.object({
    cpf: z.string()
        .min(10, "O CPF deve ter 11 dígitos")
        .max(11, "O CPF deve ter 11 dígitos")
        .refine(value => !/^\s*$/.test(value), { message: "O CPF não pode ser vazio" })
        .refine(value => /^[0-9]+$/.test(value), { message: "O CPF deve conter apenas números" })
        .refine(value => !/^(\d)\1+$/.test(value), { message: "Os números do CPF não podem ser todos iguais" }),
    nome: z.string().min(3, "O nome deve ter pelo menos 3 letras"),
    sobrenome: z.string().min(3, "O sobrenome deve ter pelo menos 3 letras"),
    setor: z.string()
        .refine(value => setoresPermitidos.includes(value), `O setor deve ser ${setoresPermitidos.join(', ')}`),
    departamento: z.string()
        .refine(value => departamentosPermitidos.includes(value), `O departamento deve ser ${departamentosPermitidos.join(', ')}`), 
    tipo: z.string()
        .refine(value => tiposPermitidos.includes(value), `O tipo deve ser ${tiposPermitidos.join(', ')}`),
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