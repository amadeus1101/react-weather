import React from "react";

function Mobile({ todayData, pos, showCurrentDate, loading }) {
  const hoursArray = [1, 5, 9, 13, 17, 21];
  const today = showCurrentDate(0);

  const date = new Date();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const [state, setState] = React.useState({ value: hours });
  const randomBg = [
    "#e1ae00, #f200ff",
    "#ff506f, #ff7423",
    "#ffa500, #ff0000",
    "#ff8900, #00a1ff",
    "#004aff, #00a1ff",
    "#f83dff, #00bdff",
    "#f83dff, #ffb500",
    "#00e8b7, #0001ff",
  ];

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
              background: `linear-gradient(45deg, ${randomBg[0]})`,
            }}
          >
            <div className="temp">
              <h4>{todayData.hours[hours].temp}</h4>
              <img
                src={`https://yastatic.net/weather/i/icons/funky/dark/${todayData.hours[hours].icon}.svg`}
                alt="weather"
              />
              <p>{pos}</p>
              {/* <p>{todayData.description}</p> */}
            </div>
            <div className="box">
              <div className="date">
                <h4>{`${today.day} ${today.month} - `}</h4>
                <b
                  className={
                    date.getDay() === 6 || date.getDay() === 0 ? "weekday" : ""
                  }
                >
                  {weekdays[date.getDay()]}
                </b>
              </div>
              <div className="params">
                <div className="row">
                  <span>{`${
                    todayData.hours[state.value].wind_speed
                  } m/s`}</span>
                  <img src="assets/img/snowy.png" alt="weather-params" />
                </div>
                <div className="row">
                  <span>{`${todayData.hours[state.value].humidity} %`}</span>
                  <img src="assets/img/snowy.png" alt="weather-params" />
                </div>
                <div className="row">
                  <span>{`${
                    todayData.hours[state.value].pressure_mm
                  } mmHg`}</span>
                  <img src={"assets/img/snowy.png"} alt="weather-params" />
                </div>
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
