import React from "react";

function Card(props) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const onFlip = () => {
    if (window.innerWidth <= 910 || props.flipMode) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={isFlipped ? "card short flipped" : "card "}
      onClick={onFlip}
    >
      <div className="content">
        <div className="date">
          <h4 className={props.isWeekend ? "weekday" : ""}>{props.weekday}</h4>
          <p>{props.month + " " + props.day}</p>
        </div>
        <div className="temp">
          <h4>{props.temperature}</h4>
          <img src={props.icon} alt="weather" />
          <p>
            {`${props.temperatureMin}` + " -> " + `${props.temperatureMax}`}
          </p>
          <p>{props.description}</p>
        </div>
        <div className="phase">
          <p>Moon phase:</p>
          <img src={props.moon} alt="moon-phase" />
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
            <td>{props.morning.temperature}</td>
            <td>{`${props.morning.speed} ${props.morning.direction}`}</td>
            <td>{props.morning.humidity}</td>
            <td>{props.morning.pressure}</td>
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Afternoon</th>
          </tr>
          <tr>
            <td className="tableDate">Afternoon</td>
            <td>{props.afternoon.temperature}</td>
            <td>{`${props.afternoon.speed} ${props.afternoon.direction}`}</td>
            <td>{props.afternoon.humidity}</td>
            <td>{props.afternoon.pressure}</td>
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Evening</th>
          </tr>
          <tr>
            <td className="tableDate">Evening</td>
            <td>{props.evening.temperature}</td>
            <td>{`${props.evening.speed} ${props.evening.direction}`}</td>
            <td>{props.evening.humidity}</td>
            <td>{props.evening.pressure}</td>
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Night</th>
          </tr>
          <tr>
            <td className="tableDate">Night</td>
            <td>{props.night.temperature}</td>
            <td>{`${props.night.speed} ${props.night.direction}`}</td>
            <td>{props.night.humidity}</td>
            <td>{props.night.pressure}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Card;
