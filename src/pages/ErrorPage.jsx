import Header from "../components/Header";

function ErrorPage({ darkmode, cardMode, setCardMode, changeColorTheme }) {
  return (
    <>
      <Header
        changeColorTheme={changeColorTheme}
        darkmode={darkmode}
        cardMode={cardMode}
        setCardMode={setCardMode}
      />
      <div className="error-container">
        <div className="error-content">
          <h2>404</h2>
          <p>We are sorry, the page you looking for does not exist(</p>
        </div>
      </div>
    </>
  );
}
export default ErrorPage;
