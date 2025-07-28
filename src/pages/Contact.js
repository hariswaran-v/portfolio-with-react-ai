import React from "react";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-4 scroll-mt-20 z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Get in <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="text-gray-400 mb-8">
          I’m open to freelance projects, internships, or full-time
          opportunities. Let’s connect!
        </p>
        <a
          href="mailto:hariswaranvenkatesh@gmail.com"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
