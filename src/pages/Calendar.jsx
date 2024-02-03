import getDate from "../getDate";

function Calendar() {
  const d = new Date();
  let fweek = d.getDay() - ((d.getDate() % 7) - 1);
  //const tday = d.getDate();
  if (fweek < 0) fweek += 7;
  let calendar = getDate(100, 1, fweek, d.getMonth());
  const fillMoonPhases = (n_moon) => {
    const len = calendar.length;
    calendar[n_moon - 1].moon = 1;
    n_moon + 14 > len
      ? (calendar[n_moon - 15].moon = 5)
      : (calendar[n_moon + 13].moon = 5);
    n_moon + 7 > len
      ? (calendar[n_moon - 22].moon = 3)
      : (calendar[n_moon + 6].moon = 3);
    n_moon + 22 > len
      ? (calendar[n_moon - 8].moon = 7)
      : (calendar[n_moon + 21].moon = 7);
    let moon_ep = 2;
    let phase_iter = 1;
    for (let i = n_moon; i < len; i++) {
      if (calendar[i].moon === -1) calendar[i].moon = moon_ep;
      switch (phase_iter) {
        case 7:
          moon_ep = 4;
          break;
        case 14:
          moon_ep = 6;
          break;
        case 22:
          moon_ep = 8;
          break;
        default:
          break;
      }
      phase_iter++;
    }
    phase_iter = 1;
    moon_ep = 8;
    for (let i = n_moon; i >= 0; i--) {
      if (calendar[i].moon === -1) calendar[i].moon = moon_ep;
      switch (phase_iter) {
        case 8:
          moon_ep = 6;
          break;
        case 15:
          moon_ep = 4;
          break;
        case 22:
          moon_ep = 2;
          break;
        default:
          break;
      }
      phase_iter++;
    }
  };
  fillMoonPhases(10);
  const first = calendar[0];
  const f_weekday = first.weekcode === 0 ? 7 : first.weekcode;
  calendar = calendar.slice(1);
  return (
    <>
      <div className="calendar">
        <h2 className="title">
          <span className="red">{first.month[0]}</span>
          {first.month.slice(1)}
        </h2>
        <p className="subtitle">
          Moon calendar on <span className="red">{first.month}</span>{" "}
          {d.getFullYear()} - Minsk
        </p>
        <div className="month-container">
          <div
            className={first.isweekend ? "month-item weekend" : "month-item"}
            style={{ gridColumn: f_weekday }}
          >
            <img src={`../../assets/img/m2.png`} alt="moon-phase" width={32} />
            <p>{first.day}</p>
          </div>
          {calendar.map((elem) => (
            <div
              className={elem.isweekend ? "month-item weekend" : "month-item"}
              key={elem.day}
            >
              <img
                src={`../../assets/img/m${elem.moon}.png`}
                alt="moon-phase"
                width={32}
              />
              <p>{elem.day}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Calendar;
