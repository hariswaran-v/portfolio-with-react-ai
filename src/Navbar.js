import { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, FolderOpen, Mail, User } from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavLink = ({ section }) => {
    const isActive = activeSection === section.id;

    return (
      <a
        href={`#${section.id}`}
        onClick={() => setMenuOpen(false)}
        className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
          isActive
            ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
            : "text-gray-300 hover:text-white hover:bg-slate-800/50"
        }`}
      >
        <section.icon
          className={`w-5 h-5 transition-colors ${
            isActive
              ? "text-cyan-400"
              : "text-gray-400 group-hover:text-cyan-300"
          }`}
        />

        <span className="font-medium">{section.label}</span>

        {/* Active indicator */}
        {isActive && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
        )}
      </a>
    );
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-xl tracking-wide">
                  HARISWARAN
                </h1>
                <p className="text-cyan-400 text-xs">MERN Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {sections.map((section) => (
                <NavLink key={section.id} section={section} />
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <nav className="px-4 py-6 space-y-2">
              {sections.map((section) => (
                <NavLink key={section.id} section={section} />
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-800">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  Hire Me
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Floating Navigation Dots - Desktop Only */}
      <div className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 space-y-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`group relative block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-cyan-400 scale-125"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              title={section.label}
            >
              {/* Tooltip */}
              <div
                className={`absolute right-6 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap transition-all duration-200 ${
                  activeSection === section.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                }`}
              >
                {section.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-800"></div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"
          style={{
            width: `${Math.min(
              100,
              (window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight)) *
                100
            )}%`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
