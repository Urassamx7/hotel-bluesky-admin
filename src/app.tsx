import { ToastContainer } from "react-toastify";
import Dashboard from "./dashboard";

export function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      <Dashboard />
      <ToastContainer />
    </div>
  );
}
