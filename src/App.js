import React from "react";
import "./index.scss";

function flip() {
  // document.querySelector(".short").classNameList.toggle("flipped");
  console.log("hello");
}
function changeTheme() {
  // document.querySelector("body").classNameList.toggle("dark");
  console.log("Brian?...");
}
let state = { value: "1" };
function handleChange(event) {
  setState({ value: event.target.value });
}

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <a href="#">weza</a>
          </div>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#" id="active-link">
                Weather
              </a>
            </li>
            <li>
              <a href="#">Moon calendar</a>
            </li>
          </ul>
          <div className="theme-switcher" onClick={changeTheme}>
            <img src="./assets/img/moon.png" alt="theme-switch" />
          </div>
        </nav>
      </header>

      <h2 className="title">
        <span className="red">N</span>earest weather
      </h2>
      <p className="subtitle">
        Here you will see nearest weather forecast in your city. City you
        looking now <a href="#">Minsk</a>
      </p>

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

      <div className="cards-menu">
        <p id="choosed">3 Days</p>
        <p>Week</p>
        <p>Month</p>
      </div>

      <div className="cardContainer">
        <div className="card">
          <div className="content">
            <div className="date">
              <h4 className="weekday">Today</h4>
              <p>February 24</p>
            </div>
            <div className="temp">
              <h4>-11</h4>
              <img src="./assets/img/cloud.png" alt="weather" />
              <p>-15 -- -10</p>
              <p>Cloudy</p>
            </div>
            <div className="phase">
              <p>Moon phase:</p>
              <img src="./assets/img/sun.png" alt="moon-phase" />
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th className="tableDate">Time</th>
                <th>Temperature (*C)</th>
                <th>Speed (m/s)</th>
                <th>Humidity (%)</th>
                <th>Pressure (mmHg)</th>
              </tr>
              <tr className="tableRow">
                <th colSpan="5">Morning</th>
              </tr>
              <tr>
                <td className="tableDate">Morning</td>
                <td>-10</td>
                <td>22 SW</td>
                <td>70</td>
                <td>745</td>
              </tr>
              <tr className="tableRow">
                <th colSpan="5">Afternoon</th>
              </tr>
              <tr>
                <td className="tableDate">Afternoon</td>
                <td>-11</td>
                <td>25 NW</td>
                <td>75</td>
                <td>755</td>
              </tr>
              <tr className="tableRow">
                <th colSpan="5">Evening</th>
              </tr>
              <tr>
                <td className="tableDate">Evening</td>
                <td>-14</td>
                <td>19 SE</td>
                <td>60</td>
                <td>740</td>
              </tr>
              <tr className="tableRow">
                <th colSpan="5">Night</th>
              </tr>
              <tr>
                <td className="tableDate">Night</td>
                <td>-15</td>
                <td>30 NE</td>
                <td>80</td>
                <td>765</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="select">
        <div className="selectCity">Minsk, Belarus</div>
      </div>
      <h2 className="title">
        <span className="red">F</span>orecast in nearest cities
      </h2>
      <div className="cardContainer">
        <div className="card short" onClick={flip}>
          <div className="content">
            <div className="date">
              <h4>Kiev</h4>
              <p>February 24</p>
            </div>
            <div className="temp">
              <h4>-11</h4>
              <img src="./assets/img/cloud.png" alt="weather" />
              <p>-15 -- -10</p>
              <p>Cloudy</p>
            </div>
            <div className="phase">
              <p>Moon phase:</p>
              <img src="./assets/img/sun.png" alt="moon-phase" />
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th className="tableDate">Time</th>
                <th>Temperature (*C)</th>
                <th>Speed (m/s)</th>
                <th>Humidity (%)</th>
                <th>Pressure (mmHg)</th>
              </tr>
              <tr className="tableRow">
                <th colSpan="4">Morning</th>
              </tr>
              <tr>
                <td className="tableDate">Morning</td>
                <td>-10</td>
                <td>22 SW</td>
                <td>70</td>
                <td>744</td>
              </tr>
              <tr className="tableRow">
                <th colSpan="4">Afternoon</th>
              </tr>
              <tr>
                <td className="tableDate">Afternoon</td>
                <td>-11</td>
                <td>25 NW</td>
                <td>75</td>
                <td>755</td>
              </tr>
              <tr className="tableRow">
                <th colSpan="4">Evening</th>
              </tr>
              <tr>
                <td className="tableDate">Evening</td>
                <td>-14</td>
                <td>19 SE</td>
                <td>60</td>
                <td>740</td>
              </tr>
              <tr className="tableRow">
                <th colSpan="4">Night</th>
              </tr>
              <tr>
                <td className="tableDate">Night</td>
                <td>-15</td>
                <td>30 NE</td>
                <td>80</td>
                <td>765</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <article>
        <h2 className="title">
          <span className="red">D</span>ay of Rolex
        </h2>
        <p className="subtitle">Daily rubric of what? ...</p>

        <p>
          <span className="red">T</span>oday we celebrate The International Day
          of Folex. Lorem ipsum dolor sit amet consequetur amatur de alesan.
          Orde lando salom trea liciy Rreyne samoldano; ursa etra el abaddon.
          Lorem ipsum dolor sit amet consequetur amatur de alesan. Orde lando
          salom trea liciy Rreyne samoldano; ursa etra el abaddon.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel
          itaque dignissimos nulla quidem neque nam iusto consequatur nihil,
          dicta error atque corporis doloribus officia, odio debitis! Odio,
          fugit ad? De alesan. Orde lando salom trea liciy Rreyne samoldano;
          ursa etra el abaddon. Lorem ipsum dolor sit amet consequetur amatur de
          alesan. Orde lando salom trea liciy Rreyne samoldano; ursa etra el
          abaddon.
        </p>
        <p>
          Lorem ipsum dolor sit amet consequetur amatur de alesan. Orde lando
          salom trea liciy Rreyne samoldano; ursa etra el abaddon. Dicta error
          atque corporis doloribus officia, odio debitis! Odio, fugit ad?
        </p>
      </article>
      <footer>
        <h3>weza</h3>
        <nav>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#" id="active-link">
                Weather
              </a>
            </li>
            <li>
              <a href="#">Moon calendar</a>
            </li>
          </ul>
        </nav>

        <p>
          <a href="#">www.weza.com</a> All rights reserved
        </p>
        <p>
          Icons used by <a href="#">Flaticon.org</a>
        </p>
      </footer>
    </>
  );
}

export default App;
