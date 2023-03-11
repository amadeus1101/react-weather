import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function Diagram({ globalArray, showCurrentDate }) {
  let days = [];

  for (let i = 0; i < 7; i++) {
    days[i] = showCurrentDate(i).day;
  }

  const [activeDiagram, setActiveDiagram] = React.useState(0);
  const [userData, setUserData] = React.useState({
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
            <img src={`../../assets/img/${item}`} alt="diagram-ico" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Diagram;
