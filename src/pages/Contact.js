import React from "react";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[70vh] py-24 px-4 scroll-mt-20 z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-900 to-slate-950"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Section Label */}
        <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20 inline-block mb-6">
          Contact
        </span>

        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-500 mb-6 tracking-tight">
          Get in{" "}
          <span className="block text-5xl md:text-6xl font-light text-white/80">
            Touch
          </span>
        </h2>

        {/* Sub Text */}
        <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
          I’m open to freelance projects, internships, or full-time
          opportunities. Let’s connect and build something amazing.
        </p>

        {/* Contact CTA Button */}
        <a
          href="mailto:hariswaranvenkatesh@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
        >
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
