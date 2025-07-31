import { useState, useEffect } from "react";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import MyStack from "./MyStack";

import {
  Code2,
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  ExternalLink,
  Star,
  Coffee,
  Sparkles,
} from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "15+", icon: Star },
  { label: "Lines of Code", value: "10K+", icon: Code2 },
  { label: "Coffee Consumed", value: "∞", icon: Coffee },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden scroll-smooth">
      {/* BG Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* ================== Home Section ================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-20 scroll-mt-20 z-10"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Area */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for hire</span>
            </div>

            <div className="space-y-4">
              <p className="text-cyan-400 text-lg font-medium tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                HARI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  SWARAN
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                  MERN Stack Developer
                </h2>
                <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce" />
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Passionate full-stack developer crafting modern web applications
              with the{" "}
              <span className="text-cyan-400 font-semibold">MERN stack</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                <span className="flex items-center gap-2">
                  Let's Connect{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-cyan-400/10">
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-gray-500 text-sm">Follow me:</span>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/hariswaran-v" },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/hariswaran-v",
                  },
                  {
                    icon: Mail,
                    href: "mailto:hariswaranvenkatesh@gmail.com",
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image + Stats */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Profile Image */}
            <div className="relative mx-auto lg:mx-0 w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800 p-2 rounded-2xl border border-slate-700">
                <img
                  src="/images/profile.jpg"
                  alt="Hariswaran - MERN Stack Developer"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="text-sm font-semibold">Full Stack</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <MyStack />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
