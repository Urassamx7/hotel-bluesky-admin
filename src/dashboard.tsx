import Main from "./components/main";
import Navbar from "./nav-bar";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <Navbar />
      <Main>
        <h1>Hello Dashboard</h1>
      </Main>
    </div>
  );
};

export default Dashboard;
