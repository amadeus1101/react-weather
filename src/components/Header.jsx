import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Logo } from "./logo.svg";

function Header({ changeColorTheme, mode }) {
  //const [activeLink, setActiveLink] = React.useState(1);
  const [menuOpened, setMenuOpened] = React.useState(false);
  //const links = ["About us", "Weather", "Moon calendar"];
  let menu = document.querySelector(".burger");

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  const changeActiveLink = (id) => {
    setActiveLink(id);
  };
  const onClickMenu = () => {
    if (!menuOpened) {
      menu.classList.add("active-menu");
      document.querySelector("header").classList.add("burger-opened");
      //document.body.style.overflow = "hidden";
    } else {
      menu.classList.remove("active-menu");
      document.querySelector("header").classList.remove("burger-opened");
      //document.body.style.overflow = "auto";
      //document.body.style.overscrollBehavior = "none";
    }
    setMenuOpened(!menuOpened);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <div className="logo" onClick={() => onClickMenu()}>
            <Logo />
            <p>eza</p>
          </div>
        </Link>
        <ul>
          <li className="burger" onClick={() => onClickMenu()}></li>
          <li onClick={() => onClickMenu()}>
            <Link to="/about">About us</Link>
          </li>
          <li onClick={() => onClickMenu()}>
            <Link to="/">Weather</Link>
          </li>
          <li onClick={() => onClickMenu()}>
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
