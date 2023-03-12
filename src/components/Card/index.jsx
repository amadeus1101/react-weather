import "./Card.scss";

function Card(props) {
  let pathToTheMoon = "";

  const defineMoon = () => {
    switch (props.moon) {
      case 0:
        pathToTheMoon = "m5.png";
        break;
      case 1:
      case 2:
      case 3:
        pathToTheMoon = "m6.png";
        break;
      case 4:
        pathToTheMoon = "m7.png";
        break;
      case 5:
      case 6:
      case 7:
        pathToTheMoon = "m8.png";
        break;
      case 8:
        pathToTheMoon = "m1.png";
        break;
      case 9:
      case 10:
      case 11:
        pathToTheMoon = "m2.png";
        break;
      case 12:
        pathToTheMoon = "m3.png";
        break;
      case 13:
      case 14:
      case 15:
        pathToTheMoon = "m4.png";
        break;
      default:
        pathToTheMoon = "moon2.png";
    }
  };
  defineMoon();

  const flipTheCard = (id) => {
    props.changeActiveCard(id);
  };
  let showDeg = "";
  let showHumidPercent = "";
  if (window.innerWidth <= 910) {
    showHumidPercent = "%";
    showDeg = "°";
  }

  let classType = "card";
  const setCardClass = () => {
    if (props.cardMode) {
      if (props.activeType) classType = "card short flipped";
      else classType = "card short";
    } else {
      if (props.activeType) classType = "card opened";
      else classType = "card";
    }
  };
  setCardClass();
  return (
    <div className={classType} onClick={() => flipTheCard(props.cardId)}>
      {props.loading ? (
        <>
          <div className="skeleton">
            <div className="skeleton-block">
              <h5></h5>
            </div>
            <div className="skeleton-block">
              <h5></h5>
              <p></p>
            </div>
            <div className="skeleton-block">
              <p></p>
              <div className="skeleton-round"></div>
            </div>
          </div>
          <div className="skeleton-table">
            <ul className="skeleton-table-header">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className="skeleton-table-data">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="content">
            <div className="date">
              <h4 className={props.isWeekend ? "weekday" : undefined}>
                {props.weekday}
              </h4>
              <p>{props.monthName + " " + props.day}</p>
            </div>
            <div className="temp">
              <h4>{props.temperature}</h4>
              <img
                src={`https://yastatic.net/weather/i/icons/funky/dark/${props.icon}.svg`}
                alt="weather"
                width={64}
              />
              <p>
                {`${props.temperatureMin}` + " -> " + `${props.temperatureMax}`}
              </p>
              <p>{props.description}</p>
            </div>
            <div className="phase">
              <p>Moon phase:</p>
              <img
                src={`../../assets/img/${pathToTheMoon}`}
                alt="moon-phase"
                width={48}
              />
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
                <th colSpan="4">Morning</th>
              </tr>
              <tr>
                <td className="tableDate">Morning</td>
                <td>{props.morning.temperature + showDeg}</td>
                <td>{`${props.morning.speed} ${props.morning.direction}`}</td>
                <td>{props.morning.humidity + showHumidPercent}</td>
                <td>{props.morning.pressure}</td>
              </tr>
              <tr className="tableRow">
                <th colSpan="4">Afternoon</th>
              </tr>
              <tr>
                <td className="tableDate">Afternoon</td>
                <td>{props.afternoon.temperature + showDeg}</td>
                <td>{`${props.afternoon.speed} ${props.afternoon.direction}`}</td>
                <td>{props.afternoon.humidity + showHumidPercent}</td>
                <td>{props.afternoon.pressure}</td>
              </tr>
              <tr className="tableRow">
                <th colSpan="4">Evening</th>
              </tr>
              <tr>
                <td className="tableDate">Evening</td>
                <td>{props.evening.temperature + showDeg}</td>
                <td>{`${props.evening.speed} ${props.evening.direction}`}</td>
                <td>{props.evening.humidity + showHumidPercent}</td>
                <td>{props.evening.pressure}</td>
              </tr>
              <tr className="tableRow">
                <th colSpan="4">Night</th>
              </tr>
              <tr>
                <td className="tableDate">Night</td>
                <td>{props.night.temperature + showDeg}</td>
                <td>{`${props.night.speed} ${props.night.direction}`}</td>
                <td>{props.night.humidity + showHumidPercent}</td>
                <td>{props.night.pressure}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
export default Card;
