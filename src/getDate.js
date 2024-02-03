const getDate = (count, s_day = -1, s_week = -1, s_month = -1) => {
  const d = new Date();
  const months = [
    { name: "January", limit: 31 },
    { name: "February", limit: 28 },
    { name: "March", limit: 31 },
    { name: "April", limit: 30 },
    { name: "May", limit: 31 },
    { name: "June", limit: 30 },
    { name: "July", limit: 31 },
    { name: "August", limit: 31 },
    { name: "September", limit: 30 },
    { name: "October", limit: 31 },
    { name: "November", limit: 30 },
    { name: "December", limit: 31 },
  ];
  if (d.getFullYear() % 4 === 0) months[1].limit = 29;
  if (count > 31) count = months[s_month].limit;

  let d_arr = [];
  let t_day;
  let t_week;
  let t_month;
  if (s_day > 0) {
    t_day = s_day;
    t_week = s_week;
    t_month = s_month;
  } else {
    t_day = d.getDate();
    t_week = d.getDay();
    t_month = d.getMonth();
  }

  for (let i = 0; i < count; i++) {
    let temp = {
      day: "",
      weekcode: -1,
      weekday: "",
      isweekend: false,
      month: "",
      moon: -1,
    };
    if (t_day > months[t_month].limit) {
      t_day = 1;
      t_month++;
      if (t_month > 11) t_month = 0;
    }
    if (t_week > 6) t_week = 0;
    temp.day = t_day;
    temp.month = months[t_month].name;
    temp.weekcode = t_week;
    switch (t_week) {
      case 0:
        temp.isweekend = true;
        temp.weekday = "Sunday";
        break;
      case 1:
        temp.weekday = "Monday";
        break;
      case 2:
        temp.weekday = "Tuesday";
        break;
      case 3:
        temp.weekday = "Wednesday";
        break;
      case 4:
        temp.weekday = "Thursday";
        break;
      case 5:
        temp.weekday = "Friday";
        break;
      case 6:
        temp.isweekend = true;
        temp.weekday = "Saturday";
        break;
    }
    d_arr.push(temp);
    t_day++;
    t_week++;
  }
  d_arr[0].weekday = "Today";
  return d_arr;
};

export default getDate;
