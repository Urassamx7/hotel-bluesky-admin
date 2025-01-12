import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type userType } from "../types/index";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../services/index";

const LoginPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<userType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: userType) => {
    const response = await api.post("/auth/login", data);

    if (!response) {
      toast.error("Falha no login");
    }
    console.log(response.data);
    toast.success("Login efetuado com sucesso!");
  };

  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none  lg:px-0 bg-backgroundColor">
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
              Login
            </h1>
            <p className="text-sm text-muted-foreground text-zinc-100">
              Insira seu e-mail e senha para aceder a página do administrador.
            </p>
          </div>
          <form
            className="w-full space-y-2"
            onSubmit={handleSubmit((data) => onSubmit(data))}
          >
            <div className="space-y-2">
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
              <label className="text-zinc-100 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>

              <input
                type="email"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email..."
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500 text-pretty">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
              <label className="text-zinc-100 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Senha
              </label>

              <input
                type="password"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Insira a senha..."
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500 text-pretty">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 ml-auto w-full bg-btnColor hover:bg-btnColor/70">
              Continuar
            </button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <p className="px-8 text-center text-sm  text-primary">
            Clicando em continuar você concorda com nossos{" "}
            <a
              className="underline underline-offset-4 hover:text-btnColor"
              href="/terms"
            >
              Termos de serviço
            </a>{" "}
            e{" "}
            <a
              className="underline underline-offset-4 hover:text-btnColor"
              href="/privacy"
            >
              Política de privacidade
            </a>
            .
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
