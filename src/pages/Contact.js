import SocialMediaLinks from "../components/SocialMediaLinks";

const Contact = () => {
  return (
    <section className="bg-slate-900 px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto min-h-[6vh] grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Social Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-cyan-400">Contact Me</h2>
          <p className="text-gray-300">
            Feel free to reach out through any of the platforms below:
          </p>

          <SocialMediaLinks />
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-slate-800 p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-slate-700 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-slate-700 text-white focus:outline-none"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-slate-700 text-white focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded text-white font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
