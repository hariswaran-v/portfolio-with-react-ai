import React from "react";
import {
  Database,
  TerminalSquare,
  Atom,
  ServerCog,
  Download,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 scroll-mt-20 z-10 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image & Info */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mx-auto lg:mx-0 flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-6xl">H</span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>
            </div>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>hariswaran.dev@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+91 12345 67890</span>
              </div>
            </div>

            <button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3 mx-auto lg:mx-0">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          {/* Right side - Description */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed">
                Hi there! I'm{" "}
                <span className="text-cyan-400 font-semibold">Hariswaran</span>,
                a passionate MERN Stack developer with a love for creating
                <span className="text-white font-medium">
                  {" "}
                  innovative web solutions
                </span>
                .
              </p>

              <p className="leading-relaxed">
                With expertise in full-stack JavaScript development, I
                specialize in building responsive web applications that deliver
                exceptional user experiences. My journey in web development is
                driven by curiosity, creativity, and a commitment to writing
                clean, efficient code.
              </p>

              <p className="leading-relaxed">
                I enjoy tackling complex problems and transforming ideas into
                reality through modern web technologies. Whether it's crafting
                pixel-perfect UIs or architecting robust backend systems, I
                bring dedication and attention to detail to every project.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">2+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
