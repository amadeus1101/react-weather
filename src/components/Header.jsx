import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Logo } from "./logo.svg";

function Header({ changeColorTheme, mode }) {
  const [activeLink, setActiveLink] = React.useState(1);
  const links = ["About us", "Weather", "Moon calendar"];
  let menu = document.querySelector(".burger");
  const changeActiveLink = (id) => {
    setActiveLink(id);
  };
  const onClickBurger = () => {
    menu.classList.toggle("active-menu");
    document.querySelector("header").classList.toggle("burger-opened");
  };
  const closeMenu = () => {
    document.querySelector("header").classList.remove("burger-opened");
    menu.classList.remove("active-menu");
  };
  return (
    <header>
      <nav>
        <Link to="/">
          <div className="logo" onClick={() => closeMenu()}>
            <Logo />
            <p>eza</p>
          </div>
        </Link>
        <ul>
          <li className="burger" onClick={() => onClickBurger()}></li>
          <li onClick={() => closeMenu()}>
            <Link to="/about">About us</Link>
          </li>
          <li onClick={() => closeMenu()}>
            <Link to="/">Weather</Link>
          </li>
          <li onClick={() => closeMenu()}>
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
