import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, href, variant = "primary", download = false }) => {
  const baseStyle =
    "px-6 py-2 rounded shadow transition font-medium inline-block";

  const variants = {
    primary: "bg-cyan-500 text-white hover:bg-cyan-600",
    outline:
      "border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white",
  };

  return (
    <a
      href={href}
      download={download}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {text}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "outline"]),
  download: PropTypes.bool,
};

export default Button;
