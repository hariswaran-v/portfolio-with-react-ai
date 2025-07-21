import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialMedia = [
  {
    icon: <MdEmail />,
    href: "mailto:hariswaranvenkatesh@gmail.com",
    hover: "hover:text-red-500",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/hariswaran",
    hover: "hover:text-black",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/hariswaran",
    hover: "hover:text-blue-600",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/hariswaran",
    hover: "hover:text-pink-500",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com/hariswaran",
    hover: "hover:text-sky-400",
  },
];

const SocialMediaLinks = ({ align = "", gap = "gap-4", size = "text-2xl" }) => {
  return (
    <div className={`flex ${align} ${gap}`}>
      {socialMedia.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white ${item.hover} transition duration-300`}
        >
          <span className={size}>{item.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
