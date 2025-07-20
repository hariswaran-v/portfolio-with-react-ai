import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => (
  <div>
    <Navbar />
    <hr />
    <Outlet />
  </div>
);

export default Layout;
