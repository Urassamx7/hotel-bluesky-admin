export function App() {
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
          <form className="w-full space-y-2">
            <div className="space-y-2">
              <label className="text-zinc-100 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>

              <input
                type="email"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-zinc-100 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Senha
              </label>

              <input
                type="password"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Insira a senha..."
              />
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 ml-auto w-full bg-btnColor hover:bg-btnColor/70"
              type="submit"
            >
              Continuar
            </button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
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
    </div>
  );
}
