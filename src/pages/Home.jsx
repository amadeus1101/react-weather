import { useState } from "react";
import getDate from "../getDate";
import Card from "../components/Card";
import SkeletonCard from "../components/Card/SkeletonCard";
import Input from "../components/Input";
import axios from "axios";
import Diagram from "../components/Diagram";
import Mobile from "../components/Mobile/Mobile";
import SunStat from "../components/SunStat/SunStat";

function Home({ weather, getWeather, cardMode }) {
  const [activeCard, setActiveCard] = useState(-1);
  const [city, setCity] = useState("Minsk");
  const [isChartOn, setChartOn] = useState(false);
  const skeletonArr = [0, 1, 2, 3, 4, 5, 6];
  const date = getDate(7);
  const GEO_API = "d8cb9f388c6c6f5acf8c2866895c6134"; //openweathermap.org

  async function getCoordinates(city) {
    try {
      const geoResp = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${GEO_API}`
      );
      if (geoResp.data.length !== 0) {
        getWeather(geoResp.data[0].lat, geoResp.data[0].lon);
        return geoResp.data[0].name;
      } else {
        return false;
      }
    } catch (err) {
      console.error("Error while fetching geocode...", err);
    }
  }

  return (
    <>
      <Mobile weather={weather[0]} city={city} />
      <Input city={city} setCity={setCity} getCoordinates={getCoordinates} />
      <div className="cardContainer">
        {weather.length > 0
          ? weather.map((card, index) => (
              <Card
                id={index}
                card={card}
                date={date[index]}
                mode={cardMode}
                isActive={activeCard === index ? true : false}
                setActive={setActiveCard}
                key={index}
              />
            ))
          : skeletonArr.map((skull) => (
              <SkeletonCard mode={cardMode} key={skull} />
            ))}
      </div>
      <h2 className="title">
        <span className="red">O</span>
        ther info
      </h2>
      <p className="subtitle">Some other data about weather</p>
      <SunStat data={weather[0]} />
      {isChartOn && <Diagram data={weather} days={date} />}
      <button
        className="btn"
        onClick={() => {
          setChartOn(!isChartOn);
        }}
      >
        {isChartOn ? "Hide diagram" : "Show diagram"}
      </button>
    </>
  );
}

export default Home;
