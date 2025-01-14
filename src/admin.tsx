import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Plus, Slash } from "lucide-react";
import Main from "./components/main";
import Navbar from "./nav-bar";
import type { FecthAdminType } from "../types";
import { useEffect, useState } from "react";
import { api } from "../services";
import { AdminTableForm } from "./components/table-admin";


const Admins = () => {
  const [users, setUsers] = useState<FecthAdminType[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("@hotelbluesky:token");
    if (!token) {
      return;
    }
    const fetchData = async () => {
      const response = await api.get<FecthAdminType[]>("/admin/list-admins", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      <Navbar />
      <Main>
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
            <li className="inline-flex items-center gap-1.5">
              <a className="transition-colors text-zinc-700" href="/">
                Dashboard
              </a>
            </li>
            <li
              role="presentation"
              aria-hidden="true"
              className="[&>svg]:size-3.5"
            >
              <Slash />
            </li>
            <span
              aria-disabled="true"
              aria-current="page"
              className="font-normal text-foreground"
            >
              Admins
            </span>
          </ol>
        </nav>
        <div className="flex items-center justify-between gap-2 py-5">
          <div className="flex flex-1 gap-4">
            <input
              className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:max-w-sm"
              placeholder="Procure por um usuário..."
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-white px-4 py-2 text-xs font-medium text-secondary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-9 md:text-sm"
            >
              <Plus size="14px" color="black" /> Add New
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-transparent">
          <AdminTableForm users={users} />
        </div>
        <div className="flex flex-col items-center justify-end gap-2 py-4 sm:flex-row">
          <div className="flex w-full items-center justify-between gap-2 sm:justify-end">
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Página 1 de 100
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="hidden h-8 w-8 items-center justify-center rounded-md border p-0 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 lg:flex"
              >
                <ChevronsLeft />
              </button>
              <button
                type="button"
                className="hidden h-8 w-8 items-center justify-center rounded-md border p-0 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 lg:flex"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                className="hidden h-8 w-8 items-center justify-center rounded-md border p-0 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 lg:flex"
              >
                <ChevronRight />
              </button>
              <button
                type="button"
                className="hidden h-8 w-8 items-center justify-center rounded-md border p-0 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 lg:flex"
              >
                <ChevronsRight />
              </button>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Admins;
