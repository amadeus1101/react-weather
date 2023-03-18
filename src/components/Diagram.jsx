import { useState } from "react";

//import { Chart as ChartJS } from "chart.js/auto";
//import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Diagram({ globalArray, showCurrentDate, date }) {
  let days = globalArray.map((item) => item.day);
  const [activeDiagram, setActiveDiagram] = useState(0);
  const [userData, setUserData] = useState({
    labels: days,
    datasets: [
      {
        label: "Temperature",
        data: globalArray.map((item) => item.temperature),
        borderColor: "#ff3146",
        backgroundColor: "#ff3146",
        pointStyle: "circle",
        pointRadius: 8,
        pointHoverRadius: 10,
      },
    ],
  });
  const diagramIcons = ["temperature.png", "humidity.png", "wind.png"];

  const changeDiagram = (param) => {
    if (param === 0) {
      setUserData({
        labels: days,
        datasets: [
          {
            label: "Temperature",
            data: globalArray.map((item) => item.temperature),
            borderColor: "#ff3146",
            backgroundColor: "#ff3146",
            pointStyle: "circle",
            pointRadius: 8,
            pointHoverRadius: 10,
          },
        ],
      });
    }
    if (param === 1) {
      setUserData({
        labels: days,
        datasets: [
          {
            label: "Humidity",
            data: globalArray.map((item) => item.afternoon.humidity),
            borderColor: "#0088cc",
            backgroundColor: "#0088cc",
            pointStyle: "circle",
            pointRadius: 8,
            pointHoverRadius: 10,
          },
        ],
      });
    }
    if (param === 2) {
      setUserData({
        labels: days,
        datasets: [
          {
            label: "Wind speed",
            data: globalArray.map((item) => item.afternoon.speed),
            borderColor: "#00cc44",
            backgroundColor: "#00cc44",
            pointStyle: "circle",
            pointRadius: 8,
            pointHoverRadius: 10,
          },
        ],
      });
    }
    setActiveDiagram(param);
  };

  // const sendWeather = () => {
  //   let date_today = date.getDate() + (date.getMonth() + 1) / 100;
  //   let isExist = false;
  //   let obj = {
  //     date: date_today,
  //     weather: {
  //       temp_night: globalArray[0].night.temperature,
  //       temp_morning: globalArray[0].morning.temperature,
  //       temp_day: globalArray[0].afternoon.temperature,
  //       temp_evening: globalArray[0].evening.temperature,
  //       moon: globalArray[0].moon,
  //     },
  //   };

  //   for (let i = 0; i < lastWeather.length; i++) {
  //     if (lastWeather[i].date === date_today) {
  //       isExist = true;
  //     }
  //   }
  //   if (!isExist) {
  //     axios.post("https://63fe15b61626c165a0a7034c.mockapi.io/forecasts", obj);
  //   }
  // };
  // sendWeather();
  return (
    <div className="diagram">
      <Line data={userData} />
      <ul>
        {diagramIcons.map((item, index) => (
          <li
            onClick={() => changeDiagram(index)}
            id={index === activeDiagram ? "active-diagram" : undefined}
            key={index}
          >
            <img
              src={`../../assets/img/${item}`}
              alt="diagram-ico"
              width={24}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Diagram;
