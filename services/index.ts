import axios, { AxiosError } from "axios";
import { handleError } from "../utils";
import { toast } from "react-toastify";
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