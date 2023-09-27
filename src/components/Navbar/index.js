import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SCOUTORY_LOGO from "../../assets/scoutory-logo.png";
import SEARCH_ICON from "../../assets/search.svg";
import "./style.css";

const menu = [
  {
    id: 1,
    link: "/",
    name: "home",
  },
  {
    id: 2,
    link: "/",
    name: "news",
  },
  {
    id: 3,
    link: "/",
    name: "player database",
  },
  {
    id: 4,
    link: "/",
    name: "subscriptions",
  },
  {
    id: 5,
    link: "/",
    name: "about us",
  },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isVisible && "navbar-wrapper-visible"} navbar-wrapper fl`}>
      <div className='navbar-scoutory-logo'>
        <img src={SCOUTORY_LOGO} alt='Scoutory Logo' />
      </div>
      <div className='navbar-links-wrapper fl'>
        {menu.map(m => (
          <NavLink key={m.id + m.name} to={m.link} className='navbar-link'>
            {m.name}
          </NavLink>
        ))}
      </div>
      <div className='navbar-search-login-wrapper fl'>
        <div className='navbar-search-wrapper'>
          <img src={SEARCH_ICON} alt='Search' />
          <input
            placeholder='Search'
            type='text'
            className='navbar-search-field'
          />
        </div>
        <button className='navbar-login'>login</button>
      </div>
    </div>
  );
};

export default Navbar;
