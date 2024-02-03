import "./index.scss";

function Card({ id, card, date, mode, isActive, setActive }) {
  const onClickCard = (_el) => {
    if (isActive) setActive(-1);
    else setActive(_el);
  };
  const cardClassname = (cls) => {
    switch (cls) {
      case 0:
        return "card original";
      case 1:
        return "card original active";
      case 2:
        return "card mini";
      case 3:
        return "card mini active";
      case 4:
        return "card micro";
      case 5:
        return "card micro active";
      default:
        return "error";
    }
  };
  return (
    <div
      className={cardClassname(mode + isActive)}
      onClick={() => onClickCard(id)}
    >
      <div className="content">
        <div className="date">
          <h4 className={!date.isweekend ? "" : "weekday"}>{date.weekday}</h4>
          <p>{date.month + " " + date.day}</p>
        </div>
        <div className="temp">
          <h4>{card.parts.day_short.temp}</h4>
          <img
            src={
              "https://yastatic.net/weather/i/icons/funky/dark/" +
              card.parts.day_short.icon +
              ".svg"
            }
            alt="weather"
            width={64}
          />
          <p>{card.parts.night.temp_min + "->" + card.parts.day.temp_max}</p>
          <p>{card.parts.day_short.condition}</p>
        </div>
        <div className="phase">
          <p>Moon phase:</p>
          <img src="../../../assets/img/m2.png" alt="moon-phase" width={48} />
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <th className="tableDate">Time</th>
            <th>Temperature (*C)</th>
            <th>Speed (m/s)</th>
            <th>Humidity (%)</th>
            <th>Pressure (mmHg)</th>
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Night</th>
          </tr>
          <tr>
            <td className="tableDate">Night</td>
            <td>{card.parts.night.temp_avg}</td>
            <td>{`${card.parts.night.wind_speed} ${card.parts.night.wind_dir}`}</td>
            <td>{card.parts.night.humidity}</td>
            <td>{card.parts.night.pressure_mm}</td>
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Morning</th>
          </tr>
          <tr>
            <td className="tableDate">Morning</td>
            <td>{card.parts.morning.temp_avg}</td>
            <td>{`${card.parts.morning.wind_speed} ${card.parts.morning.wind_dir}`}</td>
            <td>{card.parts.morning.humidity}</td>
            <td>{card.parts.morning.pressure_mm}</td>
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Afternoon</th>
          </tr>
          <tr>
            <td className="tableDate">Afternoon</td>
            <td>{card.parts.day.temp_avg}</td>
            <td>{`${card.parts.day.wind_speed} ${card.parts.day.wind_dir}`}</td>
            <td>{card.parts.day.humidity}</td>
            <td>{card.parts.day.pressure_mm}</td>
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Evening</th>
          </tr>
          <tr>
            <td className="tableDate">Evening</td>
            <td>{card.parts.evening.temp_avg}</td>
            <td>{`${card.parts.evening.wind_speed} ${card.parts.evening.wind_dir}`}</td>
            <td>{card.parts.evening.humidity}</td>
            <td>{card.parts.evening.pressure_mm}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Card;
