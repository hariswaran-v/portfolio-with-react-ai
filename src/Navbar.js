import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "services", "projects", "contact"];

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
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavLink = ({ id, label }) => (
    <a
      href={`#${id}`}
      onClick={() => setMenuOpen(false)}
      className={`block px-4 py-2 md:inline hover:text-cyan-400 ${
        activeSection === id
          ? "font-bold text-cyan-300 underline underline-offset-4"
          : ""
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="bg-slate-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-[100rem] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 bg-gray-500 p-2 rounded-xl">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="rounded-full w-10 h-10"
          />
          <h4 className="tracking-widest font-semibold text-xl">HARISWARAN</h4>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <NavLink id="home" label="Home" />
          <NavLink id="services" label="What I Do" />
          <NavLink id="projects" label="Projects" />
          <NavLink id="contact" label="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 space-y-2">
          <NavLink id="home" label="Home" />
          <NavLink id="services" label="What I Do" />
          <NavLink id="projects" label="Projects" />
          <NavLink id="contact" label="Contact" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
