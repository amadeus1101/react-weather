import { useState } from "react";
import "./Mobile.scss";

function Mobile({ weather, city }) {
  const date = new Date();
  const [thumb, setThumb] = useState(date.getHours());
  const now = weather?.hours[date.getHours()];
  const custom = weather?.hours[thumb];
  const hoursArray = [1, 5, 9, 13, 17, 21];
  const background = [
    "#a200ff, #00ffbd",
    "#00e0ff, #ff02e5",
    "#004aff, #00ecff",
    "#83e700, #00bf83",
    "#ff00eb, #e1ff00",
    "#ff0000, #ff00f7",
    "#ff0000, #ffb500",
  ];

  const setBackground = (temp) => {
    if (temp > 20) return background[6];
    if (temp > 10) return background[5];
    if (temp > 0) return background[4];
    if (temp === 0) return background[3];
    if (temp < -20) return background[0];
    if (temp < -10) return background[1];
    if (temp < 0) return background[2];
  };
  // if (window.innerWidth <= 550) {
  //   document.addEventListener("scroll", () => {
  //     if (window.scrollY > 0) {
  //       document.querySelector("header").style.opacity = 1;
  //     } else {
  //       document.querySelector("header").style.opacity = 0;
  //     }
  //   });
  // }

  return (
    <section className="mobile">
      {weather === undefined ? (
        <>
          <div className="skeleton-mobile-weather">
            <ul className="skeleton-temp">
              <li></li>
              <li></li>
            </ul>
            <ul className="skeleton-params">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="slider skeleton">
            <div className="sliderInfo">
              <h5>00:00</h5>
              <h5>E</h5>
            </div>
            <input
              type="range"
              min="0"
              max="23"
              value={"11:00"}
              onChange={"nothing"}
              className="thumb"
            />

            <ul className="sliderSub">
              <li>11:00</li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div
            className="weather"
            style={{
              background: `linear-gradient(45deg, ${setBackground(now.temp)})`,
            }}
          >
            <div className="temp">
              <h4>{now.temp + "°"}</h4>
              <p>{"feels like " + now.feels_like + "°"}</p>
            </div>
            <div className="box">
              {/* <div className="date">
                <h4>t</h4>
                <b className="weekday">99</b>
              </div> */}
              <div className="params">
                <p>Location</p>
                <span>{city}</span>

                <p>Wind speed</p>
                <span>{custom.wind_speed + " m/s"}</span>

                <p>Humidity</p>
                <span>{custom.humidity + "%"}</span>
              </div>
            </div>
          </div>
          <div className="slider">
            <div className="sliderInfo">
              <h5>
                {thumb +
                  ":" +
                  (date.getMinutes() < 10
                    ? "0" + date.getMinutes()
                    : date.getMinutes())}
              </h5>
              <h5>
                {custom.temp + "°"}
                <img
                  src={`https://yastatic.net/weather/i/icons/funky/dark/${custom.icon}.svg`}
                  alt="weather-ico"
                  width={64}
                />
              </h5>
            </div>
            <input
              type="range"
              min="0"
              max="23"
              value={thumb}
              onChange={(event) => {
                setThumb(event.target.value);
              }}
              className="thumb"
            />
            <ul className="sliderSub">
              {hoursArray.map((item, index) => (
                <li key={index}>{item + ":00"}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
export default Mobile;
