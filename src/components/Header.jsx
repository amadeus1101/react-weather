import { Link } from "react-router-dom";
import React from "react";

function Header({ changeColorTheme, mode }) {
  const [activeLink, setActiveLink] = React.useState(1);
  const links = ["About us", "Weather", "Moon calendar"];
  const changeActiveLink = (id) => {
    setActiveLink(id);
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">
            weza <sup>beta</sup>
          </a>
        </div>
        <ul>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/">Weather</Link>
          </li>
          <li>
            <Link to="/calendar">Moon calendar</Link>
          </li>
        </ul>
        <div className="theme-switcher" onClick={changeColorTheme}>
          <img
            src={`../../assets/img/${mode ? "moon2.png" : "sun.png"}`}
            alt="theme-switch"
          />
        </div>
      </nav>
    </header>
  );
}
export default Header;
