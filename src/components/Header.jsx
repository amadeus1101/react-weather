import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Logo } from "./logo.svg";

function Header({ changeColorTheme, mode, setCardMode, cardMode }) {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(2);

  // window.addEventListener("resize", () => {
  //   let vh = window.innerHeight * 0.01;

  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // });

  const onClickMenu = (id) => {
    if (window.innerWidth <= 550) {
      let menu = document.querySelector(".burger");
      if (!menuOpened) {
        menu.classList.add("active-menu");
        document.querySelector("header").classList.add("burger-opened");
        document.body.style.overflow = "hidden";
      } else {
        menu.classList.remove("active-menu");
        document.querySelector("header").classList.remove("burger-opened");
        document.body.style.overflow = "auto";
        //document.body.style.overscrollBehavior = "none";
      }
      setMenuOpened(!menuOpened);
    }
    setActiveLink(id);
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
          <li
            onClick={() => onClickMenu(1)}
            className={activeLink === 1 ? "active-link" : ""}
          >
            <Link to="/about">About us</Link>
          </li>
          <li
            onClick={() => onClickMenu(2)}
            className={activeLink === 2 ? "active-link" : ""}
          >
            <Link to="/">Weather</Link>
          </li>
          <li
            onClick={() => onClickMenu(3)}
            className={activeLink === 3 ? "active-link" : ""}
          >
            <Link to="/calendar">Moon calendar</Link>
          </li>
        </ul>
        <div className="param-panel">
          <div
            className="card-mode-switcher"
            onClick={() => setCardMode(!cardMode)}
          >
            <img
              src={
                cardMode
                  ? "../../assets/img/grid2.png"
                  : "../../assets/img/grid1.png"
              }
              alt="mode-grid"
            />
          </div>
          <div className="theme-switcher" onClick={changeColorTheme}>
            <img
              src={`../../assets/img/${mode ? "moon2.png" : "sun.png"}`}
              alt="theme-switch"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
