import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Plus,
} from "lucide-react";
import Navbar from "./nav-bar";
import { Table } from "@radix-ui/themes";

const Student = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      <Navbar />
      <main className="relative mx-2 my-3 mr-2 flex-1 overflow-hidden rounded-xl  bg-background focus:outline-none md:mx-0 md:my-4 md:mr-4 ">
        <div className="p-4 md:p-8 bg-backgroundColor">
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
              <li className="inline-flex items-center gap-1.5">
                <a className="transition-colors hover:text-foreground" href="/">
                  Dashboard
                </a>
              </li>
              <li
                role="presentation"
                aria-hidden="true"
                className="[&amp;>svg]:size-3.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-slash "
                >
                  <path d="M22 2 2 22"></path>
                </svg>
              </li>
              <span
                role="link"
                aria-disabled="true"
                aria-current="page"
                className="font-normal text-foreground"
              >
                Students
              </span>
            </ol>
          </nav>
          <div className="flex items-center justify-between gap-2 py-5">
            <div className="flex flex-1 gap-4">
              <input
                className="flex h-9 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 w-full md:max-w-sm"
                placeholder="Procure por um usuário..."
              />
            </div>
            <div className="flex gap-3">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-white text-secondary shadow hover:bg-primary/90 h-9 px-4 py-2 text-xs md:text-sm ">
                <Plus size="14px" color="black" /> Add New
              </button>
            </div>
          </div>
          <p>table</p>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Nome Completo</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>E-mail</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Telefone</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>

              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
                <Table.Cell>Ativo</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell>Ativo</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                <Table.Cell>jasper@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
                <Table.Cell>Ativo</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
                <Table.Cell>Ativo</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell>Ativo</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                <Table.Cell>jasper@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
                <Table.Cell>Ativo</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
                <Table.Cell>Ativo</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell>Ativo</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>

          <div className="flex flex-col items-center justify-end gap-2 space-x-2 py-4 sm:flex-row">
            <div className="flex w-full items-center justify-between gap-2 sm:justify-end">
              <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                Página 1 de 100
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50 border shadow-sm hidden h-8 w-8 p-0 lg:flex"
                  aria-label="Go to first page"
                >
                  <ChevronsLeft />
                </button>
                <button
                  className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50 border shadow-sm hidden h-8 w-8 p-0 lg:flex"
                  aria-label="Go to previous page"
                >
                  <ChevronLeft />
                </button>
                <button
                  className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50 border shadow-sm hidden h-8 w-8 p-0 lg:flex"
                  aria-label="Go to next page"
                >
                  <ChevronRight />
                </button>
                <button
                  className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50 border shadow-sm hidden h-8 w-8 p-0 lg:flex"
                  aria-label="Go to last page"
                >
                  <ChevronsRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Student;
