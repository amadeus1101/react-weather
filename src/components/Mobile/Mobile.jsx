import { useState } from "react";
import "./Mobile.scss";

function Mobile({ todayData, date, showCurrentDate, loading }) {
  const hoursArray = [1, 5, 9, 13, 17, 21];
  // const today = showCurrentDate(0);
  // const weekdays = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const [state, setState] = useState({ value: hours });

  const bgArray = [
    "#a200ff, #00ffbd",
    "#00e0ff, #ff02e5",
    "#004aff, #00ecff",
    "#ff00eb, #e1ff00",
    "#ff0000, #ff00f7",

    "#ff0000, #ffb500",
  ];

  const defineBg = () => {
    let temp = todayData.hours[hours].temp;
    if (temp <= -10) return bgArray[0];
    if (temp > -10 && temp <= -5) {
      return bgArray[1];
    }
    if (temp > -5 && temp <= 0) {
      return bgArray[2];
    }
    if (temp > 0 && temp <= 10) {
      return bgArray[3];
    }
    if (temp > 10 && temp <= 20) {
      return bgArray[4];
    } else {
      return bgArray[5];
    }
  };

  function handleChange(event) {
    setState({ value: event.target.value });
  }
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
      {loading ? (
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
              value={state.value}
              onChange={handleChange}
              className="thumb"
            />

            <ul className="sliderSub">
              {hoursArray.map((item, index) => (
                <li key={index}>{item + ":00"}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div
            className="weather"
            style={{
              background: `linear-gradient(45deg, ${defineBg()})`,
            }}
          >
            <div className="temp">
              <h4>{todayData.hours[hours].temp}</h4>
              <img
                src={`https://yastatic.net/weather/i/icons/funky/dark/${todayData.hours[hours].icon}.svg`}
                alt="weather"
                width={72}
              />
              <p>{todayData.hours[hours].condition}</p>
              {/* <p>{todayData.description}</p> */}
            </div>
            <div className="box">
              {/* <div className="date">
                <h4>{`${today.day} ${today.month} - `}</h4>
                <b
                  className={
                    date.getDay() === 6 || date.getDay() === 0 ? "weekday" : ""
                  }
                >
                  {weekdays[date.getDay()]}
                </b>
              </div> */}
              <div className="params">
                <p>Feels like</p>
                <span>{`${todayData.hours[state.value].feels_like}°`}</span>

                <p>Wind speed</p>
                <span>{`${todayData.hours[state.value].wind_speed} m/s`}</span>

                <p>Humidity</p>
                <span>{`${todayData.hours[state.value].humidity}%`}</span>
              </div>
            </div>
          </div>
          <div className="slider">
            <div className="sliderInfo">
              <h5>{`${state.value}:${
                minutes < 10 ? "0" + minutes : minutes
              }`}</h5>
              <h5>
                {`${todayData.hours[state.value].temp}°`}
                <img
                  src={`https://yastatic.net/weather/i/icons/funky/dark/${
                    todayData.hours[state.value].icon
                  }.svg`}
                  alt="weather-ico"
                  width={64}
                />
              </h5>
            </div>
            <input
              type="range"
              min="0"
              max="23"
              value={state.value}
              onChange={handleChange}
              className="thumb"
            />

            <ul className="sliderSub">
              {hoursArray.map((item, index) => (
                <li key={index}>
                  {item + ":" + (minutes < 10 ? "0" + minutes : minutes)}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
export default Mobile;
