import { ChevronsLeft, LayoutDashboard, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logout from "./logout";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const setIsActive =
    "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:text-secondary  transparent bg-white";

  return (
    <nav className="relative z-10 hidden h-screen flex-none px-3 md:block w-72 text-black">
      <div className="flex items-center px-0 py-5 md:px-2 justify-between">
        <h1 className="text-2xl font-bold">Logo</h1>
        <button type="button" className="rounded-3xl bg-black p-1">
          <ChevronsLeft />
        </button>
      </div>

      <div className="space-y-4 py-4">
        <div className="px-2 py-2">
          <div className="mt-3 space-y-1">
            <nav className="grid items-start gap-2">
              <Link
                className={
                  currentPath === "/"
                    ? setIsActive
                    : "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:text-muted-foreground transparent"
                }
                to="/"
              >
                <LayoutDashboard
                  color={currentPath === "/" ? "black" : "white"}
                />
                <span
                  className={
                    currentPath === "/"
                      ? "mr-2 truncate text-black"
                      : "mr-2 truncate"
                  }
                >
                  Dashboard
                </span>
              </Link>
              <Link
                className={
                  currentPath === "/clients"
                    ? setIsActive
                    : "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:text-muted-foreground transparent"
                }
                to="/clients"
              >
                <User color={currentPath === "/clients" ? "black" : "white"} />
                <span
                  className={
                    currentPath === "/clients"
                      ? "mr-2 truncate text-black"
                      : "mr-2 truncate"
                  }
                >
                  Clientes
                </span>
              </Link>
              <Logout />
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
