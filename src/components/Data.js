import React from "react";

function Data() {
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
  const [items, setItems] = React.useState([
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
  ]);
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

  setItems(
    items.map(
      (obj, index) => (obj.d = showCurrentDate(index).day),
      (obj.w = showCurrentDate(index).weekday),
      (obj.m = showCurrentDate(index).month)
    )
  );
  //   for (let i = 0; i < items.length; i++) {
  //     const tmp = showCurrentDate(i);
  //     items[i].d = tmp.day;
  //     items[i].w = tmp.weekday;
  //     items[i].m = tmp.month;
  //   }
  console.log(items);
}

export default Data;
