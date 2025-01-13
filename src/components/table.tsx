import {
  Table,
  Badge,
  AlertDialog,
  Button,
  Flex,
  DropdownMenu,
} from "@radix-ui/themes";
import { FecthuserType } from "../../types";
import { Ellipsis } from "lucide-react";
interface Props {
  users: FecthuserType[];
}
export const TableForm = ({ users }: Props) => {
  const columns = [
    { title: "Nome Completo", accessor: "full_name" },
    { title: "E-mail", accessor: "email" },
    { title: "Telefone", accessor: "phone" },
    { title: "Estado", accessor: "status" },
  ];
  const actions = [
    { title: "Editar", accessor: "Update" },
    { title: "Deletar", accessor: "Delete" },
  ];
  return (
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
        {users &&
          users.map((user) => (
            <Table.Row key={user.user_id}>
              <Table.RowHeaderCell>{user.full_name}</Table.RowHeaderCell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>
                {user.status === "Active" ? (
                  <Badge color="green"> {user.status}</Badge>
                ) : (
                  <Badge color="red"> {user.status}</Badge>
                )}
              </Table.Cell>
              <Table.Cell>
                <button className="hover:bg-white/10 ease-in-out rounded-md">
                  {ActionDropdown(user.full_name, user.user_id)}
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  );
};

const AlertDelete = (name: string, id: string) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Deletar</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Deletar Cliente</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {`Você tem certeza que vai eliminar o cliente ${name}? Esta ação não pode ser revertida.`}
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action onClick={() => Delete(name, id)}>
            <Button variant="solid" color="red">
              Deletar Cliente
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

const Delete = (name: string, id: string) => {
  console.log(`Name: ${name} \n id: ${id}`);
};

const ActionDropdown = (name: string, id: string) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        style={{
          backgroundColor: "transparent",
          cursor: "pointer",
          transition: "color 0.3s ease",
        }}
      >
        <Button variant="soft">
          <Ellipsis />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        style={{
          backgroundColor: "#020817",
          width: "100px",
          cursor: "pointer"
        }}
      >
        <DropdownMenu.Item>Editar</DropdownMenu.Item>
        <DropdownMenu.Item asChild >
          {AlertDelete(name, id)}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
