import axios, { AxiosError } from "axios";
import { handleError } from "../utils";
import { toast } from "react-toastify";
import type { AdminLoginProps } from "../types/schema";
export const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export async function Delete(id: string) {
    try {
        await api.delete(`/admin/users/${id}`)
        toast.success('Usuário eliminado com sucesso.')
    } catch (error) {
        if (error instanceof AxiosError) handleError(error)
    }

}
export async function LoginFunc(email: string, password: string): Promise<AdminLoginProps> {
    const response = await api.post<AdminLoginProps>('/auth/login', { email, password })
    return response.data

}
