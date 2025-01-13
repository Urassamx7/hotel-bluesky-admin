import { ToastContainer } from "react-toastify";
import Navbar from "./nav-bar";

export function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      <Navbar />
      <ToastContainer />
    </div>
  );
}
