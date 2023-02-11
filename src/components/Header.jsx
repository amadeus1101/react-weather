function Header({ changeColorTheme, mode }) {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">
            weza <sup>beta</sup>
          </a>
        </div>
        <ul>
          <li className="disabled">
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#" id="active-link">
              Weather
            </a>
          </li>
          <li className="disabled">
            <a href="#">Moon calendar</a>
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
