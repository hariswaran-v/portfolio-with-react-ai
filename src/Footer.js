import { Link } from "react-router-dom";
import SocialMediaLinks from "./components/SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 text-white py-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center space-y-6">
        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <SocialMediaLinks align="justify-center" gap="gap-4" size="text-xl" />
        </div>

        {/* Name */}
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-500">
          Hariswaran
        </p>

        {/* Rights */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Hariswaran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
