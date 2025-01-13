import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email().min(1, "Introduza o email"),
  password: z
    .string()
    .min(8, "O password deve ter no minímo 8 caracteres")
    .max(20, "O password não deve exceder 20 caracteres"),
});
export type FecthuserType = {
  user_id: string
  full_name: string
  email: string
  phone: string
  status: string
}

export type userType = z.infer<typeof userSchema>;
