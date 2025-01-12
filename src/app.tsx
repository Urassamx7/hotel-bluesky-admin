import LoginPage from "./login";

export function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      <nav className="relative z-10 hidden h-screen flex-none px-3 md:block w-72 text-black">
        <div className="flex items-center px-0 py-5 md:px-2 justify-between">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>

        <div className="space-y-4 py-4">
          <div className="px-2 py-2">
            <div className="mt-3 space-y-1">
              <nav className="grid items-start gap-2">
                <a
                  className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:text-muted-foreground transparent"
                  data-state="closed"
                  href="/"
                >
                  <span className="mr-2 truncate">Dashboard</span>
                </a>
                <a
                  className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium bg-white text-black hover:text-black"
                  data-state="closed"
                  href="/student"
                >
                  <span className="mr-2 truncate">Students</span>
                </a>
                <a
                  className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:text-muted-foreground transparent"
                  data-state="closed"
                  href="/login"
                >
                  <span className="mr-2 truncate">Login</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
