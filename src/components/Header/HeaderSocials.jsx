import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa"; // Import Dribbble icon

const HeaderSocials = () => {
  return (
    <div className="header_socials flex gap-4 text-2xl">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/mithun0773"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://dribbble.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Dribbble"
      >
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
