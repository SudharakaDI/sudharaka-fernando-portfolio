import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8">
      <div className="w-30 font-bold">
        <img src="/src/assets/sudharaka-logo.png" alt="Logo" />
      </div>

      <div className="flex items-end gap-8 text-2xl">
        <a
          href="https://www.linkedin.com/in/sudharaka-fernando/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SudharakaDI"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
