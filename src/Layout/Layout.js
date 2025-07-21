import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer"; // <-- import your Footer component

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <hr />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
