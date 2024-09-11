import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/IMTlogo.png";
import DarkMode from "./DarkMode";
import TopBar from "./TopBar";

// eslint-disable-next-line react-refresh/only-export-components
export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "about",
  },
  {
    id: 2,
    name: "Services",
    link: "services",
  },
  {
    id: 3,
    name: "Gallery",
    link: "gallery",
  }
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (link) => {
    const targetSection = document.getElementById(link);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    if (showMenu) {
      toggleMenu();
    }
  };

  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    if (showMenu) {
      toggleMenu();
    }
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <TopBar />
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="flex items-center gap-3"
          >
            <img src={Logo} alt="Logo" className="w-14" style={{width: '7.5rem', height: 'auto'}}/>
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={`#${link}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link);
                    }}
                    className="text-lg font-medium py-2 transition-colors duration-500 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button
                className="primary-btn bg-yellow-500 text-white px-4 py-2 rounded transition-all duration-300 hover:linear-gradient(135deg, #0056b3, #0099ff);"
                onClick={handleGetInTouchClick}
                style={{ backgroundImage:'yellow', color:'black', fontWeight:'600' }}
              >
                Get in touch
              </button>
              <DarkMode />
            </ul>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
                aria-label="Close menu"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
                aria-label="Open menu"
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
