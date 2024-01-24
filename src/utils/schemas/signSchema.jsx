import { z } from "zod"

export const signSchema = z.object({
    usuario: z.string().toLowerCase().min(3, "O nome deve ter pelo menos 3 letras"),
    password: z.string().min(2, "A senha deve ter pelo menos 3 letras"),
})