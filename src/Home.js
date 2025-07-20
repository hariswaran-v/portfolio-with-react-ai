import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import Button from "./Button";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import SocialMediaLinks from "./SocialMediaLinks";
import About from "./About";
import Footer from "./Footer";

const mernSkills = [
  { icon: <SiMongodb />, label: "MongoDB", hover: "hover:text-green-400" },
  { icon: <SiExpress />, label: "Express", hover: "hover:text-gray-200" },
  { icon: <SiReact />, label: "React", hover: "hover:text-blue-400" },
  { icon: <SiNodedotjs />, label: "Node.js", hover: "hover:text-green-300" },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="bg-slate-700 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-6 md:gap-10">
          {/* Left Side */}
          <div className="flex-1 text-center md:text-left max-w-xl">
            <p className="text-gray-300 text-lg mb-2">Hello, I am</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-widest">
              HARI<span className="text-cyan-400">SWARAN</span>
            </h1>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              MERN Stack Developer
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              MERN Stack Developer skilled in building responsive web apps using{" "}
              <strong>MongoDB, Express.js, React</strong>, and{" "}
              <strong>Node.js</strong>. I focus on clean code, seamless UI/UX,
              and full-stack integration to deliver high-quality applications.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button
                text="Contact Me"
                href="mailto:hariswaran@example.com"
                variant="primary"
              />
              <Button
                text="Download CV"
                href="/cv.pdf"
                variant="outline"
                download
              />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-6">
              {/* Social Icons */}
              <SocialMediaLinks />

              {/* MERN Skills */}
              <div className="flex gap-5 text-2xl text-gray-300">
                {mernSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 ${skill.hover} transition`}
                  >
                    {skill.icon}
                    <span className="text-sm hidden sm:inline">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-1 flex justify-center gap-5">
            <img
              src="/images/profile.jpg"
              alt="Hariswaran Profile"
              className="w-48 sm:w-64 md:w-72 object-cover border-4 border-cyan-400 rounded-xl shadow-md"
            />
          </div>
        </div>
      </main>
      {/* About Section */}
      <About />
      {/* What I Do Section */}
      <Services />
      {/* My Projects section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
