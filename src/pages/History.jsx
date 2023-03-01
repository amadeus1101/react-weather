function History({ history }) {
  return history.map((item, index) => (
    <div key={index}>
      <p>Date: {item.date}</p>
      <ul>
        <li>Temp-night: {item.weather.temp_night}*</li>
        <li>Temp-morning: {item.weather.temp_morning}*</li>
        <li>Temp-day: {item.weather.temp_day}*</li>
        <li>Temp-evening: {item.weather.temp_evening}*</li>
        <li>Moon: {item.weather.moon}</li>
      </ul>
    </div>
  ));
}
export default History;
