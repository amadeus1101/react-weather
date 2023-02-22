import React from "react";

function Mobile({ todayData, pos, showCurrentDate, loading }) {
  const hoursArray = [1, 5, 9, 13, 17, 21];
  const today = showCurrentDate(0);

  const date = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const [state, setState] = React.useState({ value: hours });
  function handleChange(event) {
    setState({ value: event.target.value });
  }
  return (
    <section className="mobile">
      {loading ? (
        <>
          <div className="skeleton-mobile-weather">
            <div className="skeleton-temp"></div>
            <ul className="skeleton-pos">
              <li></li>
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
          <div className="weather">
            <div className="temp">
              <h4>{todayData.hours[hours].temp}</h4>
              <img
                src={`https://yastatic.net/weather/i/icons/funky/dark/${todayData.hours[hours].icon}.svg`}
                alt="weather"
              />
              <p>
                {String(todayData.parts.morning.temp_min) +
                  " -> " +
                  String(todayData.parts.day.temp_max + 1)}
              </p>
              <p>{todayData.description}</p>
            </div>
            <div className="date">
              <h4>{pos}</h4>
              <b>{`${today.day} ${today.month}`}</b>
              <p>{weekdays[date.getDay()]}</p>
            </div>
            <div className="params">
              <div className="row">
                <p>Speed</p>
                <span>{`${todayData.hours[state.value].wind_speed} m/s`}</span>
                <img src="assets/img/snowy.png" alt="weather-params" />
              </div>
              <div className="row">
                <p>Humidity</p>
                <span>{`${todayData.hours[state.value].humidity} %`}</span>
                <img src="assets/img/snowy.png" alt="weather-params" />
              </div>
              <div className="row">
                <p>Pressure</p>
                <span>{`${
                  todayData.hours[state.value].pressure_mm
                } mmHg`}</span>
                <img src={"assets/img/snowy.png"} alt="weather-params" />
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
