import {
  Table,
  Text,
  Badge,
  AlertDialog,
  Button,
  Flex,
  DropdownMenu,
  Dialog,
  TextField,
} from "@radix-ui/themes";
import type { FecthuserType } from "../../types";
import { Ellipsis } from "lucide-react";
import { Delete } from "../../services";
import delay from "delay";
import { ToastContainer } from "react-toastify";
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
                  {ActionDropdown(user.full_name, user.user_id)}
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <ToastContainer />
    </>
  );
};

const AlertDelete = (name: string, id: string) => {
  async function DeleteUser(id: string) {
    delay(2000);
    await Delete(id);
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger style={{ cursor: "pointer" }}>
        <Button color="red">Deletar</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content
        maxWidth="450px"
        style={{
          backgroundColor: "#020817",
        }}
      >
        <AlertDialog.Title>Deletar Cliente</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {`Você tem certeza que vai eliminar o cliente ${name}? Esta ação não pode ser revertida.`}
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button
              variant="surface"
              color="gray"
              className="hover:bg-gray-500 hover:text-zinc-50 ease-in-out"
              style={{ cursor: "pointer" }}
            >
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="red"
              onClick={() => DeleteUser(id)}
              style={{ cursor: "pointer" }}
            >
              Deletar Cliente
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
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
          cursor: "pointer",
        }}
      >
        <DropdownMenu.Item asChild>
          <FormDialog />
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item asChild>{AlertDelete(name, id)}</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

const FormDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger style={{ cursor: "pointer" }}>
        <Button>Editar</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              defaultValue="Freja Johnsen"
              placeholder="Enter your full name"
            />
          </label>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              defaultValue="freja@example.com"
              placeholder="Enter your email"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
