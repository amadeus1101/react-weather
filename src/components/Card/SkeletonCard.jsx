import "./skeleton.scss";

function SkeletonCard({ mode }) {
  return (
    <div className={mode ? "skeleton short" : "skeleton"}>
      <div className="content">
        <div className="date"></div>
        <div className="temp"></div>
        <div className="phase"></div>
      </div>
      <ul className="table">
        <li>
          <div></div>
          <p></p>
        </li>
        <li>
          <div></div>
          <p></p>
        </li>
        <li>
          <div></div>
          <p></p>
        </li>
        <li>
          <div></div>
          <p></p>
        </li>
        <li>
          <div></div>
          <p></p>
        </li>
      </ul>
    </div>
  );
}

export default SkeletonCard;
