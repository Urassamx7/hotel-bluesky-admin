import { AxiosError } from "axios";
import { toast } from "react-toastify";

export function handleError(error: AxiosError) {
    if (error instanceof AxiosError && error.status === 401) {
        if (error.response) {
            if (error.response.status === 401) {
                toast.error("E-mail ou senha incorretos.");
            } else if (error.response.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error(`Erro do servidor: ${error.response.status}`);
            }
        } else if (error.request) {
            toast.error(
                "Não foi possível conectar ao servidor. Verifique sua conexão."
            );
        } else {
            toast.error("Erro ao processar a requisição.");
        }
    } else {
        toast.error("Ocorreu um erro inesperado.");
    }
}