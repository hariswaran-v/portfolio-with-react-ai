import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "about", "services", "projects", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const NavLink = ({ id, label }) => (
    <a
      href={`#${id}`}
      onClick={() => setMenuOpen(false)}
      className={`hover:text-cyan-400 transition ${
        activeSection === id
          ? "font-bold underline underline-offset-4 text-cyan-300"
          : ""
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-800 text-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 bg-gray-500 p-2 rounded-xl">
          <img
            src="./images/profile.jpg"
            alt="profile"
            className="rounded-full w-10 h-10"
          />
          <h4 className="tracking-widest font-semibold text-xl">HARISWARAN</h4>
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <NavLink id="home" label="Home" />
          <NavLink id="services" label="What I Do" />
          <NavLink id="projects" label="Projects" />
          <NavLink id="contact" label="Contact" />
        </div>

        {/* Search - Desktop */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="rounded px-2 py-1 text-black focus:outline-none"
          />
        </div>
      </div>

      {/* Links - Mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-4 pb-4 gap-4 text-lg font-medium">
          <NavLink id="home" label="Home" />
          <NavLink id="services" label="What I Do" />
          <NavLink id="projects" label="Projects" />
          <NavLink id="contact" label="Contact" />
          <input
            type="text"
            placeholder="Search..."
            className="rounded px-2 py-1 text-black focus:outline-none w-full"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
