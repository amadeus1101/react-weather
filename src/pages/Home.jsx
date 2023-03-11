import React from "react";
import Card from "../components/Card";
import Mobile from "../components/Mobile/Mobile";

import Diagram from "../components/Diagram";

function Home({
  globalArray,
  isLoading,
  setIsLoading,
  location,
  setLocation,
  todayData,
  pos,
  showCurrentDate,
  catchLocation,
  cardMode,
}) {
  const [inputValue, setInputValue] = React.useState(location);
  const [activeCard, setActiveCard] = React.useState();

  const checkCityname = (event) => {
    if (event.key === "Enter") {
      if (inputValue[inputValue.length - 1] === " ") {
        let len = inputValue.length - 1;
        console.log(inputValue.slice(0, len));
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
        .catch((error) => setLocation("Invalid City!!!"));
    }
  };

  const changeActiveCard = (id) => {
    activeCard === id ? setActiveCard() : setActiveCard(id);
  };

  return (
    <>
      <Mobile
        todayData={todayData}
        pos={pos}
        showCurrentDate={showCurrentDate}
        loading={isLoading}
      />

      <h2 className="title">
        <span className="red">W</span>eather in {pos}
      </h2>
      {!isLoading && (
        <Diagram globalArray={globalArray} showCurrentDate={showCurrentDate} />
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
          />
        ))}
      </div>
    </>
  );
}

export default Home;
