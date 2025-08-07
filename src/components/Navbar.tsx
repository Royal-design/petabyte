import logo from "@/assets/petabyteLogo.svg";
import React, { useState } from "react";
import { X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    className={`px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

interface NavLink {
  label: string;
  path: string;
}

const links: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative border-b border-b-white/30 bg-[linear-gradient(31deg,var(--red-dark)_0%,var(--neutral-black)_21%,var(--primary-100)_64%,var(--neutral-black)_95%)] ">
      {/* Main navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        {/* Logo section */}
        <figure
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center space-x-2 flex-shrink-0"
        >
          <img
            src={logo}
            alt="Petabyte logo"
            className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
          />
          <span className="uppercase text-lg sm:text-xl font-bold text-white tracking-wide">
            Petabyte
          </span>
        </figure>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link: NavLink, idx: number) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-1 text-white hover:text-gray-200 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:transition-all after:duration-300 ${
                  isActive
                    ? "after:bg-white after:scale-x-100"
                    : "after:bg-transparent after:scale-x-0"
                }font-medium`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA button */}
        <div className="hidden lg:block">
          <Button className="border-2 border-white rounded-lg px-6 py-2.5 font-semibold text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 transform focus:ring-white">
            Get a quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X strokeWidth="1px" className="size-10" />
          ) : (
            <HiOutlineMenuAlt3 strokeWidth="1px" className="size-10" />
          )}
        </button>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={`lg:hidden z-50 absolute   top-full left-0 right-0 bg-[linear-gradient(31deg,var(--red-dark)_0%,var(--neutral-black)_21%,var(--primary-100)_64%,var(--neutral-black)_95%)]  border-t border-white/20 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-4">
          {links.map((link: NavLink, idx: number) => (
            <div key={idx} className="">
              <NavLink
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-4 w-full block ${
                    isActive
                      ? "bg-white/10"
                      : " text-white hover:bg-white/10 transition-all duration-200 font-medium"
                  }`
                }
              >
                {link.label}
              </NavLink>
              <div className="h-[0.5px] w-full bg-white/20"></div>
            </div>
          ))}

          {/* Mobile CTA button */}
          <div className="pt-4">
            <Button
              className="border-2 w-fit border-white rounded-lg py-3 font-semibold text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 focus:ring-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
