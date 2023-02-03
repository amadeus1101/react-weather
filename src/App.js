import React from "react";
import Card from "./components/Card";
import Mobile from "./components/Mobile";
import Header from "./components/Header";
import Data from "./components/Data";
import "./index.scss";

let state = { value: "1" };

function handleChange(event) {
  setState({ value: event.target.value });
}
function App() {
  console.log("render");
  const [darkmode, setDarkmode] = React.useState(false);

  const changeColorTheme = () => {
    setDarkmode(!darkmode);
    if (darkmode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  /***************************************************************** */
  const date = new Date();

  const months = [
    {
      month: "January",
      daysCount: 31,
    },
    {
      month: "February",
      daysCount: 28,
    },
    {
      month: "March",
      daysCount: 31,
    },
    {
      month: "April",
      daysCount: 30,
    },
    {
      month: "May",
      daysCount: 31,
    },
    {
      month: "June",
      daysCount: 30,
    },
    {
      month: "July",
      daysCount: 31,
    },
    {
      month: "August",
      daysCount: 31,
    },
    {
      month: "September",
      daysCount: 30,
    },
    {
      month: "October",
      daysCount: 31,
    },
    {
      month: "November",
      daysCount: 30,
    },
    {
      month: "December",
      daysCount: 31,
    },
  ];
  if (date.getFullYear % 4 === 0) months[1].daysCount = 29;
  const weekdays = [
    "Monday",
    "Tuesdat",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const items = [
    {
      d: "___",
      w: "_______",
      m: "_______",

      tempData: {
        info: "-11",
        limits: "-15 -> -10",
        desc: "Cloudy",
      },
    },
    {
      d: "___",
      w: "_______",
      m: "_______",
      tempData: {
        info: "-11",
        limits: "-15 -> -10",
        desc: "Cloudy",
      },
    },
    {
      d: "___",
      w: "_______",
      m: "_______",
      tempData: {
        info: "-11",
        limits: "-15 -> -10",
        desc: "Cloudy",
      },
    },
  ];
  const showCurrentDate = (counter) => {
    let currentDate = {
      day: date.getDate() + counter,
      weekday: date.getDay() + counter - 1,
      month: months[date.getMonth()].month,
    };
    const cMonth = date.getMonth();
    if (currentDate.day > months[cMonth].daysCount) {
      currentDate.day -= month[cMonth].daysCount;
      if (date.getMonth() < 11) {
        currentDate.month = months[cMonth + 1].month;
      } else {
        currentDate.month = months[cMonth - 11].month;
      }
    }
    if (currentDate.weekday > 6) {
      currentDate.weekday = currentDate.weekday - 7;
    }
    currentDate.weekday = weekdays[currentDate.weekday];

    return currentDate;
  };
  for (let i = 0; i < items.length; i++) {
    const tmp = showCurrentDate(i);
    items[i].d = tmp.day;
    items[i].w = tmp.weekday;
    items[i].m = tmp.month;
  }
  return (
    <>
      <Header changeColorTheme={changeColorTheme} />

      <h2 className="title">
        <span className="red">N</span>earest weather
      </h2>
      <p className="subtitle">
        Here you will see nearest weather forecast in your city. City you
        looking now <a href="#">Minsk</a>
      </p>

      <Mobile state={state} handleChange={handleChange} />

      <div className="cards-menu">
        <p id="choosed">3 Days</p>
        <p>Week</p>
        <p>Month</p>
      </div>

      <div className="cardContainer">
        {items.map((item, index) => (
          <Card
            key={index}
            flipMode={1}
            day={item.d}
            week={item.w}
            month={item.m}
            temp={item.tempData}
            moon={"../public/assets/img/cloud.png"}
            weekend={
              item.w === "Sunday" || item.w === "Saturday" ? true : false
            }
          />
        ))}
      </div>

      <div className="select">
        <div className="selectCity">Minsk, Belarus</div>
      </div>
      <h2 className="title">
        <span className="red">F</span>orecast in nearest cities
      </h2>
      <div className="cardContainer">
        {/* <Card flip={flip} classMode={"card short"} /> */}
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
