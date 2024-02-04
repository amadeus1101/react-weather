import "./SunStat.scss";

function SunStat({ data }) {
  const d = new Date();
  const s_arr = [1, 5, 9, 13, 17, 21];
  return (
    <div className="sun-loop">
      <div className="range">
        <span>Sunrise: {data?.sunrise}</span>
        <span>Sunset: {data?.sunset}</span>
      </div>
      <input
        type="range"
        min="0"
        max="1440"
        value={d.getHours() * 60 + d.getMinutes()}
      />
      <ul>
        {s_arr.map((el) => (
          <li key={el}>{el + ":00"}</li>
        ))}
      </ul>
    </div>
  );
}

export default SunStat;
