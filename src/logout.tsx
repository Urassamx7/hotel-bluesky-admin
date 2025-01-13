import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useAuth } from "./context/auth";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none  lg:px-0 bg-backgroundColor">
      <AlertDialog.Root>
        <AlertDialog.Trigger style={{ cursor: "pointer" }}>
          <Button color="blue">Logout</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content
          maxWidth="450px"
          style={{
            backgroundColor: "#020817",
          }}
        >
          <AlertDialog.Title>Logout</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Você tem certeza que quer sair da conta?
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="surface" color="gray">
                Cancelar
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="blue" onClick={logout}>
                Logout
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default Logout;
