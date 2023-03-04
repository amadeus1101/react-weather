function Calendar({ months }) {
  const date = new Date();
  const currMonth = date.getMonth();

  let moons = [];
  let calendar = [];

  const fillMoonPhases = (newMoon) => {
    let l_counter = 0;
    for (let i = newMoon - 1; i < months[currMonth].daysCount; i++) {
      if ((i + 1) % 7 === newMoon % 7) {
        l_counter++;
        if (l_counter === 9) {
          l_counter = 1;
        }
        moons[i] = l_counter++;
      } else {
        moons[i] = l_counter;
      }
    }
    l_counter = 8;
    for (let i = newMoon - 2; i >= 0; i--) {
      if ((i + 1) % 7 === newMoon % 7) {
        l_counter--;

        moons[i] = l_counter--;
        if (l_counter === 0) {
          l_counter = 8;
        }
      } else {
        moons[i] = l_counter;
      }
    }
    console.log(moons);
  };
  fillMoonPhases(21);
  const defineSpecialCases = (i) => {
    if (i === 0) {
      return "first";
    }
    if (i === date.getDate() - 1) {
      return "today";
    } else {
      return "";
    }
  };
  const fillCalendar = () => {
    for (let i = 0; i < months[currMonth].daysCount; i++) {
      calendar[i] = {
        day: i + 1,
        moon: `m${moons[i]}.png`,
        weekend: (i + 1) % 7 === 4 || (i + 1) % 7 === 5 ? true : false,
      };
    }
  };
  fillCalendar();
  return (
    <>
      <div className="calendar">
        <h2 className="title">
          <span className="red">{months[currMonth].month[0]}</span>
          {months[currMonth].month.slice(1)}
        </h2>
        <p className="subtitle">
          Moon calendar on <span className="red">March</span> 2023
        </p>
        <div className="month-container">
          {calendar.map((item, index) => (
            <div
              id={defineSpecialCases(index)}
              className={item.weekend ? "month-item weekend" : "month-item"}
              key={index}
            >
              <img src={`../../assets/img/${item.moon}`} alt="moon-phase" />
              <p className={item.weekend ? "weekend" : ""}>{item.day}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Calendar;
