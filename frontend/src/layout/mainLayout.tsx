import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/sidebar";
import { NavBar } from "../components/Dashboard/Navbar";

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        
        <NavBar />

        <div className="p-5 dark:bg-gray-100 bg-dark flex-1 overflow-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default MainLayout;