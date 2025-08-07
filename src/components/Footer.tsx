import logo from "@/assets/petabyteLogo.svg";
import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link, NavLink, useNavigate } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { label: "Telegram", path: "#", icon: <FaTelegramPlane /> },
  { label: "Facebook", path: "#", icon: <FaFacebookF /> },
  { label: "Linkedin", path: "#", icon: <TiSocialLinkedin /> },
  { label: "Twitter", path: "#", icon: <FaTwitter /> },
];

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary-200 px-4 md:px-12 py-12 flex flex-col items-center text-center gap-8">
      <figure
        onClick={() => navigate("/")}
        className="cursor-pointer flex items-center space-x-2"
      >
        <img src={logo} alt="Petabyte Logo" className="size-12" />
        <span className="uppercase text-white text-xl">Petabyte</span>
      </figure>

      <nav className="flex flex-wrap flex-row items-center gap-4">
        {links.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              `relative pb-1 text-base md:text-lg after:content-[''] text-white after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:transition-all ${
                isActive ? "after:bg-white font-medium" : "after:bg-transparent"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {socialLinks.map((link) => (
          <Link
            to={link.path}
            key={link.label}
            className="bg-white hover:scale-105 transition-transform rounded-sm p-2 flex text-primary-200"
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
        <p className="text-lg text-white">Newsletter</p>
        <div className="relative w-full max-w-sm">
          <input
            className="bg-white rounded-full w-full pr-12 py-2 px-4 border border-gray-300 focus:outline-none"
            placeholder="Email"
            type="email"
          />
          <div className="bg-primary-200 text-white absolute -right-1 top-0 h-full flex items-center px-3 cursor-pointer rounded-r-full">
            <IoIosArrowRoundForward className="text-xl" />
          </div>
        </div>
      </div>

      <p className="tracking-widest text-sm text-white mt-4">
        All Copyrights are reserved by PRIME
      </p>
    </footer>
  );
};
