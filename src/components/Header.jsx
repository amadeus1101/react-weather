function Header({ changeColorTheme }) {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">weza</a>
        </div>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#" id="active-link">
              Weather
            </a>
          </li>
          <li>
            <a href="#">Moon calendar</a>
          </li>
        </ul>
        <div className="theme-switcher" onClick={changeColorTheme}>
          <img src="./assets/img/moon.png" alt="theme-switch" />
        </div>
      </nav>
    </header>
  );
}
export default Header;
