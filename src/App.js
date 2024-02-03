import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import ErrorPage from "./pages/ErrorPage";

import "./index.scss";

function App() {
  const URL = "https://react-weather-server.vercel.app";
  const [weather, setWeather] = React.useState([]);
  const [cardMode, setCardMode] = React.useState(false);
  React.useEffect(() => {
    getWeather();
  }, []);

  const changeCardMode = (mode = 0) => {
    cardMode === 2 ? setCardMode(0) : setCardMode(2);
  };

  async function getWeather(lat = 53.9, lon = 27.5618) {
    try {
      const weatherResp = await axios.get(
        URL +
          `/v2/forecast?lat=${lat}&lon=${lon}&lang=en_US&limit=7&hours=true&extra=false`
      );
      if (weatherResp.data.status === 403) {
        const staticWeatherResp = await axios.get(URL + "/default");
        setWeather(staticWeatherResp.data.forecasts);
      } else {
        setWeather(weatherResp.data.forecasts);
      }
    } catch (err) {
      console.error("Error in fetching... ", err);
    }
  }

  return (
    <>
      <Header
        cardMode={cardMode}
        setCardMode={setCardMode}
        changeCardMode={changeCardMode}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              weather={weather}
              getWeather={getWeather}
              cardMode={cardMode}
              changeCardMode={changeCardMode}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
