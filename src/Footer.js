import { Link } from "react-router-dom";
import SocialMediaLinks from "./components/SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        {/* 1st Line: Icons */}
        <SocialMediaLinks align="justify-center" gap="gap-4" size="text-xl" />

        {/* 2nd Line: Name */}
        <p className="text-lg font-semibold">Hariswaran</p>

        {/* 3rd Line: Navigation Links */}
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>

        {/* 4th Line: Rights */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Hariswaran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
