import Button from "../components/Button";

const About = () => {
  return (
    <section className="bg-slate-800 px-6 py-20 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 text-white">
        {/* Left: Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="./images/profile.jpg"
            alt="Hariswaran Profile"
            className="w-48 sm:w-64 md:w-72 object-cover border-4 border-cyan-400 rounded-xl shadow-md"
          />
        </div>

        {/* Right: About Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            Hello! I'm{" "}
            <span className="font-semibold text-white">Hariswaran</span>, a
            passionate{" "}
            <span className="text-cyan-300">MERN Stack Developer</span> based in
            Tamil Nadu.
          </p>

          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm mb-8">
            <p>
              <span className="text-cyan-400 font-medium">Name:</span>{" "}
              Hariswaran
            </p>
            <p>
              <span className="text-cyan-400 font-medium">Email:</span>{" "}
              hariswaranvenkatesh@gmail.com
            </p>
            <p>
              <span className="text-cyan-400 font-medium">Phone:</span> +91
              73734 28343
            </p>
            <p>
              <span className="text-cyan-400 font-medium">Date of Birth:</span>{" "}
              30/07/1999
            </p>
            <p>
              <span className="text-cyan-400 font-medium">Nationality:</span>{" "}
              Indian
            </p>
            <p>
              <span className="text-cyan-400 font-medium">Address:</span> Salem,
              Valappady
            </p>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default About;
