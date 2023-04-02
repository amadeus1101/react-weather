import React from "react";
//import History from "./pages/History";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import axios from "axios";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";

import "./index.scss";

function App() {
  alert("WEZA WILL WORK UNTIL APRIL 7, THEN STATIC DATA WILL BE POSTED");

  const [cardMode, setCardMode] = React.useState(0);
  const [weather, setWeather] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [darkmode, setDarkmode] = React.useState(false);
  //const [lastWeather, setLastWeather] = React.useState([]);

  let latitude = 53.9;
  let longitude = 27.5667;

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
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
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
        `https://react-weather-server-fkfe.vercel.app/v2/forecast?lat=${latitude}&lon=${longitude}&lang=en_US&limit=7&hours=true&extra=false`
      );
      // const historyResp = await axios.get(
      //   "https://63fe15b61626c165a0a7034c.mockapi.io/forecasts"
      // );

      setWeather(weatherResp.data);
      //setLastWeather(historyResp.data);

      setIsLoading(false);
    }
    getWeather();
  }, []);

  const catchLocation = (lat, lon) => {
    async function getWeather() {
      const weatherResp = await axios.get(
        `https://react-weather-server-fkfe.vercel.app/v2/forecast?lat=${lat}&lon=${lon}&lang=en_US&limit=7&hours=true&extra=false`
      );
      setIsLoading(false);
      setWeather(weatherResp.data);
    }
    getWeather();
  };

  for (let i = 0; i < 7; i++) {
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
      month: date.getMonth() + 1,
      isWeekday: false,
    };
    const cMonth = date.getMonth();
    if (currentDate.day > months[cMonth].daysCount) {
      currentDate.day -= months[cMonth].daysCount;
      if (date.getMonth() < 11) {
        currentDate.month = cMonth + 1;
      } else {
        currentDate.month = cMonth - 11;
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
      globalArray[i].morning.temperature =
        weather.forecasts[i].parts.morning.temp_avg;
      globalArray[i].morning.speed =
        weather.forecasts[i].parts.morning.wind_speed;
      globalArray[i].morning.pressure =
        weather.forecasts[i].parts.morning.pressure_mm;
      globalArray[i].morning.humidity =
        weather.forecasts[i].parts.morning.humidity;
      globalArray[i].morning.direction =
        weather.forecasts[i].parts.morning.wind_dir;
      /** afternoon */
      globalArray[i].afternoon.temperature =
        weather.forecasts[i].parts.day.temp_avg;
      globalArray[i].afternoon.speed =
        weather.forecasts[i].parts.day.wind_speed;
      globalArray[i].afternoon.pressure =
        weather.forecasts[i].parts.day.pressure_mm;
      globalArray[i].afternoon.humidity =
        weather.forecasts[i].parts.day.humidity;
      globalArray[i].afternoon.direction =
        weather.forecasts[i].parts.day.wind_dir;
      /** evening */
      globalArray[i].evening.temperature =
        weather.forecasts[i].parts.evening.temp_avg;
      globalArray[i].evening.speed =
        weather.forecasts[i].parts.evening.wind_speed;
      globalArray[i].evening.pressure =
        weather.forecasts[i].parts.evening.pressure_mm;
      globalArray[i].evening.humidity =
        weather.forecasts[i].parts.evening.humidity;
      globalArray[i].evening.direction =
        weather.forecasts[i].parts.evening.wind_dir;
      /** night */
      globalArray[i].night.temperature =
        weather.forecasts[i].parts.night.temp_avg;
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
  }
  return (
    <>
      <Header
        cardMode={cardMode}
        setCardMode={setCardMode}
        darkmode={darkmode}
        setDarkmode={setDarkmode}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              date={date}
              globalArray={globalArray}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              catchLocation={catchLocation}
              /* HEADER */

              cardMode={cardMode}
              /*Mobile*/
              todayData={!isLoading ? weather.forecasts[0] : ""}
              showCurrentDate={showCurrentDate}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar months={months} />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/history" element={<History history={lastWeather} />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
