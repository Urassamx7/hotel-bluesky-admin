import { Badge, Table } from "@radix-ui/themes";
import type { FecthAdminType } from "../../types";
interface Props {
  users: FecthAdminType[];
}
export const AdminTableForm = ({ users }: Props) => {
  const columns = [
    { title: "Nome Completo", accessor: "full_name" },
    { title: "E-mail", accessor: "email" },
    { title: "Telefone", accessor: "phone" },
    { title: "Role", accessor: "role" },
    { title: "Estado", accessor: "status" },
  ];
  return (
    <>
      <Table.Root size="1">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell key={column.accessor}>
                {column.title}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users?.map((user) => (
            <Table.Row key={user.user_id}>
              <Table.RowHeaderCell>{user.full_name}</Table.RowHeaderCell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>{user.role.name}</Table.Cell>
              <Table.Cell>
                {user.status === "Active" ? (
                  <Badge color="green"> {user.status}</Badge>
                ) : (
                  <Badge color="red"> {user.status}</Badge>
                )}
              </Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  className="hover:bg-white/10 ease-in-out rounded-md"
                >
                  ...
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};
