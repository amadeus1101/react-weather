function Mobile({ state, handleChange }) {
  return (
    <section className="mobile">
      <div className="weather">
        <div className="temp">
          <h4>-11</h4>
          <img src="./assets/img/cloud.png" alt="weather" />
          <p>-15 -- -10</p>
          <p>Cloudy</p>
        </div>
        <div className="date">
          <h4>Minsk</h4>
          <b>4 February</b>
          <p>Friday</p>
        </div>
        <div className="params">
          <div className="row">
            <p>Speed</p>
            <span>20m/s</span>
            <img src="assets/img/snowy.png" alt="weather-params" />
          </div>
          <div className="row">
            <p>Humidity</p>
            <span>70%</span>
            <img src="assets/img/snowy.png" alt="weather-params" />
          </div>
          <div className="row">
            <p>Pressure</p>
            <span>765mmHg</span>
            <img src="assets/img/snowy.png" alt="weather-params" />
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="sliderInfo">
          <h5>10:45</h5>
          <h5>
            -14&deg
            <img src="assets/img/thunderstorm.png" alt="weather-ico" />
          </h5>
        </div>
        <input
          type="range"
          min="1"
          max="18"
          value={state.value}
          onChange={handleChange}
          className="thumb"
        />
        <ul className="sliderSub">
          <li>06:45</li>
          <li>09:45</li>
          <li>12:45</li>
          <li>15:45</li>
          <li>18:45</li>
          <li>21:45</li>
        </ul>
      </div>
    </section>
  );
}
export default Mobile;
