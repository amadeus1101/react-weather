function Calendar() {
  const date = new Date();
  const currMonth = date.getMonth();
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let moons = [
    4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 7, 8, 8, 8, 8, 8, 8, 1, 2, 2, 2, 2,
    2, 2, 3, 4, 4, 4,
  ];
  let newMoons = [];
  let calendar = [];

  if (date.getFullYear() % 4 === 0) months[1] = 29;
  const countMoonPhases = (newMoon) => {
    for (let i = newMoon; i < months[currMonth]; i++) {
      //hh
    }
  };
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
    for (let i = 0; i < months[currMonth]; i++) {
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
          <span className="red">M</span>arch
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
