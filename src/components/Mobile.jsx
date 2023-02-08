import React from "react";

function Mobile({ todayData, pos }) {
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
      <div className="weather">
        <div className="temp">
          <h4>{todayData.temperature}</h4>
          <img src={todayData.icon} alt="weather" />
          <p>
            {String(todayData.temperatureMin) +
              " -> " +
              String(todayData.temperatureMax)}
          </p>
          <p>{todayData.description}</p>
        </div>
        <div className="date">
          <h4>{pos}</h4>
          <b>{`${todayData.day} ${todayData.month}`}</b>
          <p>{weekdays[date.getDay()]}</p>
        </div>
        <div className="params">
          <div className="row">
            <p>Speed</p>
            <span>{`${todayData.afternoon.speed} m/s`}</span>
            <img src="assets/img/snowy.png" alt="weather-params" />
          </div>
          <div className="row">
            <p>Humidity</p>
            <span>{`${todayData.afternoon.humidity}%`}</span>
            <img src="assets/img/snowy.png" alt="weather-params" />
          </div>
          <div className="row">
            <p>Pressure</p>
            <span>{`${todayData.afternoon.pressure} mmHg`}</span>
            <img src={"assets/img/snowy.png"} alt="weather-params" />
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="sliderInfo">
          <h5>{`${state.value}:${minutes}`}</h5>
          <h5>
            {`${todayData.temperature}*`}
            <img src={todayData.icon} alt="weather-ico" />
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
          <li>{`6:${minutes}`}</li>
          <li>{`9:${minutes}`}</li>
          <li>{`12:${minutes}`}</li>
          <li>{`15:${minutes}`}</li>
          <li>{`18:${minutes}`}</li>
          <li>{`21:${minutes}`}</li>
        </ul>
      </div>
    </section>
  );
}
export default Mobile;
