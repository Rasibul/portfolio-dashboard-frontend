import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
