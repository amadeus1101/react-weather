import React from "react";

function Card({ day, week, month, temp, moon, flipMode, weekend = false }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const onFlip = () => {
    if (window.innerWidth <= 910 || flipMode) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={isFlipped ? "card short flipped" : "card short"}
      onClick={onFlip}
    >
      <div className="content">
        <div className="date">
          <h4 className={weekend ? "weekday" : ""}>{week}</h4>
          <p>{month + " " + day}</p>
        </div>
        <div className="temp">
          <h4>{temp.info}</h4>
          <img src={temp.ico} alt="weather" />
          <p>{temp.limits}</p>
          <p>{temp.description}</p>
        </div>
        <div className="phase">
          <p>Moon phase:</p>
          <img src={moon} alt="moon-phase" />
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
            {/* <td>{morning.temp}</td>
            <td>{morning.wind}</td>
            <td>{morning.humid}</td>
            <td>{morning.press}</td> */}
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Afternoon</th>
          </tr>
          <tr>
            <td className="tableDate">Afternoon</td>
            {/* <td>{afternoon.temp}</td>
            <td>{afternoon.wind}</td>
            <td>{afternoon.humid}</td>
            <td>{afternoon.press}</td> */}
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Evening</th>
          </tr>
          <tr>
            <td className="tableDate">Evening</td>
            {/* <td>{evening.temp}</td>
            <td>{evening.wind}</td>
            <td>{evening.humid}</td>
            <td>{evening.press}</td> */}
          </tr>
          <tr className="tableRow">
            <th colSpan="4">Night</th>
          </tr>
          <tr>
            <td className="tableDate">Night</td>
            {/* <td>{night.temp}</td>
            <td>{night.wind}</td>
            <td>{night.humid}</td>
            <td>{night.press}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Card;
