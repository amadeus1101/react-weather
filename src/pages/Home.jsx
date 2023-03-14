import { useState } from "react";
import Card from "../components/Card";
import Mobile from "../components/Mobile/Mobile";
import Diagram from "../components/Diagram";

function Home({
  globalArray,
  isLoading,
  setIsLoading,
  todayData,
  showCurrentDate,
  catchLocation,
  cardMode,
  date,
}) {
  const [location, setLocation] = useState("Minsk");
  const [inputValue, setInputValue] = useState(location);
  const [activeCard, setActiveCard] = useState();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const checkCityname = (event) => {
    if (event.key === "Enter") {
      if (!Number(inputValue)) {
        if (inputValue[inputValue.length - 1] === " ") {
          // let whiteSpaceCounter = 0;
          // for(let i=inputValue)
          let newInputValue = inputValue.slice(0, inputValue.length - 1);
          setInputValue(newInputValue);
        }

        setLocation(inputValue);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=d8cb9f388c6c6f5acf8c2866895c6134`
        )
          .then((res) => res.json())
          .then((json) => {
            catchLocation(json.coord.lat, json.coord.lon);

            setIsLoading(true);
          })
          .catch((error) => setLocation("0"));
      }
    }
  };

  const changeActiveCard = (id) => {
    activeCard === id ? setActiveCard() : setActiveCard(id);
  };

  return (
    <>
      <Mobile
        todayData={todayData}
        pos={location}
        showCurrentDate={showCurrentDate}
        loading={isLoading}
        date={date}
      />

      {location !== "0" ? (
        <h2 className="title">
          <span className="red">W</span>eather in {location}
        </h2>
      ) : (
        <>
          <h2 className="title">Invalid city, check the input</h2>
          <p className="subtitle">
            The weather is shown in the last currently entered city{" "}
          </p>
        </>
      )}
      {!isLoading && (
        <Diagram
          globalArray={globalArray}
          showCurrentDate={showCurrentDate}
          date={date}
        />
      )}
      <div className="select">
        <p className="subtitle">
          To change a city, please, put correct city-name into the search box
          and press ENTER
        </p>
        <input
          id="location"
          className="selectCity"
          type="text"
          aria-label="Search"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => checkCityname(event)}
        />
      </div>
      {/* <div className="cards-menu">
        <p>Week</p>
      </div> */}

      <div className="cardContainer">
        {globalArray.map((item, index) => (
          <Card
            key={index}
            cardMode={cardMode}
            {...item}
            loading={isLoading}
            cardId={index}
            changeActiveCard={changeActiveCard}
            activeType={activeCard === index ? true : false}
            setActiveCard={setActiveCard}
            monthName={monthNames[item.month - 1]}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
