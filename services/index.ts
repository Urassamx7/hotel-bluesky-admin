import axios, { AxiosError } from "axios";
import { handleError } from "../utils";
import { toast } from "react-toastify";
import { AdminLoginProps } from "../types/schema";
export const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

export async function Delete(id: string) {
    try {
        await api.delete(`/admin/users/${id}`)
        toast.success('Usuário eliminado com sucesso.')
    } catch (error) {
        if (error instanceof AxiosError) handleError(error)
    }

}
export const LoginFunc = async (email: string, password: string): Promise<AdminLoginProps | undefined> => {
    try {
        const data = await api.post<AdminLoginProps>('/auth/login', { email: email, password: password })
        return data.data
    } catch (error) {
        if (error instanceof AxiosError) handleError(error)
    }
}