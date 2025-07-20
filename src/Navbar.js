import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center gap-2 bg-gray-500 p-2 rounded-xl">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="rounded-full w-10 h-10"
          />
          <h4 className="tracking-widest font-semibold text-xl">HARISWARAN</h4>
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Center - Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/project" className="hover:text-gray-300">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Right - Search Bar (Desktop Only) */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="rounded px-2 py-1 text-black focus:outline-none"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/project"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Project
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="rounded px-2 py-1 text-black focus:outline-none"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
