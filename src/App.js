import React from "react";
import Mobile from "./components/Mobile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";

import "./index.scss";

// async function position() {
//   const pos = await new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
//   return {
//     long: pos.coords.longitude,
//     lat: pos.coord.latitude,
//   };
// }
// await position();

function App() {
  console.log("render");

  const cardMenu = ["3 Days", "Week"];

  const [weather, setWeather] = React.useState({});
  const [location, setLocation] = React.useState("Minsk");
  const [isLoading, setIsLoading] = React.useState(true);
  const [darkmode, setDarkmode] = React.useState(false);
  const [daylimit, setDaylimit] = React.useState(3);
  const [activeMenuItem, setActiveMenuItem] = React.useState(0);
  const onChooseMenu = (id) => {
    setActiveMenuItem(id);
    if (id === 1) {
      setDaylimit(7);
    } else {
      setDaylimit(3);
    }
  };

  let lat = 53.9;
  let lon = 27.5667;
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
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let globalArray = [];
  //const url = `https://api.weather.yandex.ru/v2/forecast?lat=53.9&lon=27.5667&lang=be_BY&limit=3&hours=true&extra=false`;
  const getPosition = (pos) => {
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(getPosition);

  React.useEffect(() => {
    try {
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        setDarkmode(true);
      } else {
        if (date.getHours() > 18 && localStorage.getItem("theme") !== "light") {
          localStorage.setItem("theme", "dark");
          document.body.classList.add("dark");
          setDarkmode(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
    async function getWeather() {
      const weatherResp = await axios.get(
        `https://react-weather-server-fkfe.vercel.app/v2/forecast?lat=${lat}&lon=${lon}&lang=en_US&limit=7&hours=true&extra=false`
      );
      setIsLoading(false);
      setWeather(weatherResp.data);
    }
    getWeather();
  }, []);

  const catchLocation = (event) => {
    if (event.key === "Enter") {
      // async function getWeather() {
      //   const weatherResp = await axios.get(
      //     `http://localhost:3001/v2/forecast?lat=${lat}&lon=${lon}&lang=en_US&limit=${daylimit}&hours=true&extra=false`
      //   );
      //   setIsLoading(false);
      //   setWeather(weatherResp.data);
      //   console.log("POOOOOOOOOOOOOOOOOOST");
      // }
      // getWeather();
    }
  };

  for (let i = 0; i < daylimit; i++) {
    globalArray[i] = {
      day: 0,
      weekday: "",
      isWeekend: false,
      month: "",
      temperature: 0,
      temperatureMin: 0,
      temperatureMax: 0,
      description: "",
      icon: "",
      moon: 0,
      morning: {
        temperature: 0,
        speed: 0,
        direction: 0,
        humidity: 0,
        pressure: 0,
      },
      afternoon: {
        temperature: 0,
        speed: 0,
        direction: 0,
        humidity: 0,
        pressure: 0,
      },
      evening: {
        temperature: 0,
        speed: 0,
        direction: 0,
        humidity: 0,
        pressure: 0,
      },
      night: {
        temperature: 0,
        speed: 0,
        direction: 0,
        humidity: 0,
        pressure: 0,
      },
    };
  }
  const showCurrentDate = (counter) => {
    let currentDate = {
      day: date.getDate() + counter,
      weekday: date.getDay() + counter,
      month: months[date.getMonth()].month,
      isWeekday: false,
    };
    const cMonth = date.getMonth();
    if (currentDate.day > months[cMonth].daysCount) {
      currentDate.day -= months[cMonth].daysCount;
      if (date.getMonth() < 11) {
        currentDate.month = months[cMonth + 1].month;
      } else {
        currentDate.month = months[cMonth - 11].month;
      }
    }
    if (currentDate.weekday > 6) {
      currentDate.weekday = currentDate.weekday - 7;
    }
    if (currentDate.weekday === 0 || currentDate.weekday === 6) {
      currentDate.isWeekday = true;
    }
    currentDate.weekday = weekdays[currentDate.weekday];

    return currentDate;
  };

  if (!isLoading) {
    //console.log(weather);
    const tempMinMax = (day) => {
      let tempObj = {
        t_min: weather.forecasts[day].parts.night.temp_min,
        t_max: weather.forecasts[day].parts.day.temp_max,
      };
      if (tempObj.t_min > weather.forecasts[day].parts.morning.temp_min)
        tempObj.t_min = weather.forecasts[day].parts.morning.temp_min;
      if (tempObj.t_min > weather.forecasts[day].parts.day.temp_min)
        tempObj.t_min = weather.forecasts[day].parts.day.temp_min;
      if (tempObj.t_min > weather.forecasts[day].parts.evening.temp_min)
        tempObj.t_min = weather.forecasts[day].parts.evening.temp_min;
      if (tempObj.t_max < weather.forecasts[day].parts.morning.temp_max)
        tempObj.t_max = weather.forecasts[day].parts.morning.temp_max;
      if (tempObj.t_max < weather.forecasts[day].parts.evening.temp_max)
        tempObj.t_max = weather.forecasts[day].parts.evening.temp_max;
      if (tempObj.t_max < weather.forecasts[day].parts.night.temp_max)
        tempObj.t_max = weather.forecasts[day].parts.night.temp_max;
      return tempObj;
    };
    const defineDaytime = (hour, day) => {
      if (hour < 6) {
        return weather.forecasts[day].parts.night;
      }
      if (hour > 5 && hour < 12) {
        return weather.forecasts[day].parts.morning;
      }
      if (hour > 11 && hour < 18) {
        return weather.forecasts[day].parts.day;
      }
      if (hour > 17) {
        return weather.forecasts[day].parts.evening;
      }
    };
    for (let i = 0; i < globalArray.length; i++) {
      let todayParams = defineDaytime(date.getHours(), i);
      let tObj = tempMinMax(i);
      let tmp = showCurrentDate(i);
      globalArray[i].day = tmp.day;
      globalArray[i].weekday = tmp.weekday;
      globalArray[i].isWeekend = tmp.isWeekday;
      globalArray[i].month = tmp.month;
      globalArray[i].temperature = todayParams.temp_avg;
      globalArray[i].icon = todayParams.icon;
      globalArray[i].description = todayParams.condition;
      globalArray[i].temperatureMin = tObj.t_min;
      globalArray[i].temperatureMax = tObj.t_max;
      globalArray[i].moon = weather.forecasts[i].moon_code;

      /**  morning */
      globalArray[i].morning.temperature = Math.round(
        (weather.forecasts[i].parts.morning.temp_min +
          weather.forecasts[i].parts.morning.temp_max) /
          2
      );
      globalArray[i].morning.speed =
        weather.forecasts[i].parts.morning.wind_speed;
      globalArray[i].morning.pressure =
        weather.forecasts[i].parts.morning.pressure_mm;
      globalArray[i].morning.humidity =
        weather.forecasts[i].parts.morning.humidity;
      globalArray[i].morning.direction =
        weather.forecasts[i].parts.morning.wind_dir;
      /** afternoon */
      globalArray[i].afternoon.temperature = Math.round(
        (weather.forecasts[i].parts.day.temp_min +
          weather.forecasts[i].parts.day.temp_max) /
          2
      );
      globalArray[i].afternoon.speed =
        weather.forecasts[i].parts.day.wind_speed;
      globalArray[i].afternoon.pressure =
        weather.forecasts[i].parts.day.pressure_mm;
      globalArray[i].afternoon.humidity =
        weather.forecasts[i].parts.day.humidity;
      globalArray[i].afternoon.direction =
        weather.forecasts[i].parts.day.wind_dir;
      /** evening */
      globalArray[i].evening.temperature = Math.round(
        (weather.forecasts[i].parts.evening.temp_avg +
          weather.forecasts[i].parts.evening.temp_max) /
          2
      );
      globalArray[i].evening.speed =
        weather.forecasts[i].parts.evening.wind_speed;
      globalArray[i].evening.pressure =
        weather.forecasts[i].parts.evening.pressure_mm;
      globalArray[i].evening.humidity =
        weather.forecasts[i].parts.evening.humidity;
      globalArray[i].evening.direction =
        weather.forecasts[i].parts.evening.wind_dir;
      /** night */
      globalArray[i].night.temperature = Math.round(
        (weather.forecasts[i].parts.night.temp_min +
          weather.forecasts[i].parts.night.temp_max) /
          2
      );
      globalArray[i].night.speed = weather.forecasts[i].parts.night.wind_speed;
      globalArray[i].night.pressure =
        weather.forecasts[i].parts.night.pressure_mm;
      globalArray[i].night.humidity = weather.forecasts[i].parts.night.humidity;
      globalArray[i].night.direction =
        weather.forecasts[i].parts.night.wind_dir;
    }
    globalArray[0].weekday = "Today";
    globalArray[0].temperature =
      weather.forecasts[0].hours[date.getHours()].temp;
    console.log("loading complete");
  }

  const changeColorTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkmode(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkmode(true);
    }
  };

  return (
    <>
      <Header changeColorTheme={changeColorTheme} mode={darkmode} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mobile
                todayData={weather.forecasts[0]}
                pos={location}
                showCurrentDate={showCurrentDate}
              />
              <Home
                cardMenu={cardMenu}
                globalArray={globalArray}
                isLoading={isLoading}
                onChooseMenu={onChooseMenu}
                activeMenuItem={activeMenuItem}
                location={location}
              />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* {!isLoading && (
        <Mobile
          todayData={weather.forecasts[0]}
          pos={location}
          showCurrentDate={showCurrentDate}
        />
      )} */}
      <Footer />
    </>
  );
}

export default App;
