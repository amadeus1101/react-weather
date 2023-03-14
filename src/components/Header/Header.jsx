import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./Header.scss";

function Header({ darkmode, setDarkmode, setCardMode, cardMode }) {
  const [menuOpened, setMenuOpened] = useState(false);
  const [activeLink, setActiveLink] = useState(2);
  const menu = document.querySelector(".burger");

  const closeMenu = () => {
    menu.classList.remove("active-menu");
    document.querySelector("header").classList.remove("burger-opened");
    setMenuOpened(false);
  };

  const onClickMenu = (id) => {
    if (window.innerWidth <= 550) {
      if (!menuOpened) {
        menu.classList.add("active-menu");
        document.querySelector("header").classList.add("burger-opened");
        setMenuOpened(true);
        //document.body.style.overflow = "hidden";
      } else {
        closeMenu();
        //document.body.style.overflow = "auto";
        //document.body.style.overscrollBehavior = "none";
      }
    }

    setActiveLink(id);
  };
  const changeColorTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkmode(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkmode(true);
    }
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <div className="logo" onClick={() => closeMenu()}>
            <Logo />
            {/* <p>eza</p> */}
          </div>
        </Link>
        <ul>
          <li className="burger" onClick={() => onClickMenu()}></li>
          <li
            onClick={() => onClickMenu(1)}
            className={activeLink === 1 ? "active-link" : undefined}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={() => onClickMenu(2)}
            className={activeLink === 2 ? "active-link" : undefined}
          >
            <Link to="/">Weather</Link>
          </li>
          <li
            onClick={() => onClickMenu(3)}
            className={activeLink === 3 ? "active-link" : undefined}
          >
            <Link to="/calendar">Moon</Link>
          </li>
        </ul>
        <div className="param-panel">
          <div
            className="card-mode-switcher"
            onClick={() => {
              setCardMode(!cardMode);
              closeMenu();
            }}
          >
            <img
              src={
                cardMode
                  ? "../../assets/img/grid2.png"
                  : "../../assets/img/grid1.png"
              }
              alt="mode-grid"
              width={20}
            />
          </div>
          <div className="theme-switcher" onClick={changeColorTheme}>
            <img
              src={`../../assets/img/${darkmode ? "moon2.png" : "sun.png"}`}
              alt="theme-switch"
              width={24}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
