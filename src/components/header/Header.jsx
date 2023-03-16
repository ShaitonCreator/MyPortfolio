import React, { useState, useEffect } from "react";
import "./Header.scss";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  // const location = useLocation();

  const controlNavbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 200 && !mobileMenu) {
      if (window.scrollY > lastScrollY) {
        setShow("show");
      } else {
        setShow("hide");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  // to get scroll in y axis value
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const menuItems = [
    { title: "Home", index: 0, link: "#" },
    { title: "About", index: 1, link: "#" },
    { title: "Skills", index: 2, link: "#" },
    { title: "Portfolio", index: 3, link: "#portfolio" },
    { title: "Contact", index: 4, link: "#" },
  ];
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <div className="contentWrapper">
        <div className="logo" onClick={() => navigate("/")}>
          <a href="#" className="logo">
            Portfolio.
          </a>
        </div>
        <ul className="menuItems">
          {menuItems.map((item) => (
            <a
              key={item.index}
              style={{
                "--i": item.index,
                animationDelay: `calc(0.2s * var(--i))`,
              }}
              className="menuItem"
              href={item.link}
            >
              {item.title}
            </a>
          ))}
        </ul>
        <div className="mobileMenuItems">
          {mobileMenu ? (
            <VscChromeClose
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
