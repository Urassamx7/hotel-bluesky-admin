import { ChevronDown, ChevronUp, LockKeyhole, Table, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { setIsActive } from "../../utils/styles";
import { useState } from "react";
const TableLink = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-between gap-2 overflow-hidden rounded-md py-2 text-sm font-medium transparent "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Table />
          <span>Tabelas de dados</span>
        </div>
        <div>
          <button type="button">
            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </button>
      <div
        className={
          isOpen
            ? "flex flex-col items-start gap-2 overflow-hidden rounded-md text-sm font-medium transparent ml-5 -mt-3 w-full"
            : "hidden"
        }
      >
        <div className=" w-[90%]">
          <Link
            className={
              currentPath === "/admins"
                ? setIsActive
                : "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:text-muted-foreground transparent w-full"
            }
            to="/admins"
          >
            <LockKeyhole
              size={16}
              color={currentPath === "/admins" ? "black" : "white"}
            />
            <span
              className={
                currentPath === "/admins"
                  ? "mr-2 truncate text-black"
                  : "mr-2 truncate"
              }
            >
              Administradores
            </span>
          </Link>
        </div>
        <div className="w-[90%]">
          <Link
            className={
              currentPath === "/clients"
                ? setIsActive
                : "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:text-muted-foreground transparent  "
            }
            to="/clients"
          >
            <User
              size={16}
              color={currentPath === "/clients" ? "black" : "white"}
            />
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
        </div>
      </div>
    </>
  );
};

export default TableLink;
