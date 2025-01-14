import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useAuth } from "./context/auth";
import { LogOut } from "lucide-react";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          style={{
            cursor: "pointer",
            justifyContent: "start",
            flex: "1",
            backgroundColor: "transparent",
            padding: 0,
          }}
        >
          <LogOut /> Logout
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content
        maxWidth="450px"
        style={{
          backgroundColor: "#020817",
        }}
      >
        <AlertDialog.Title>Sair</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Você tem certeza que quer sair da conta?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button
              variant="surface"
              color="gray"
              style={{ cursor: "pointer" }}
              className="hover:bg-gray-500 hover:text-zinc-50 ease-in-out"
            >
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="blue"
              onClick={logout}
              style={{ cursor: "pointer" }}
              className="hover:bg-blue-500 ease-in-out"
            >
              Logout
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default Logout;
