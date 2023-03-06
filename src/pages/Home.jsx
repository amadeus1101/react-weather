import React from "react";
import Card from "../components/Card";
import Mobile from "../components/Mobile";

function Home({
  cardMenu,
  globalArray,
  isLoading,
  setIsLoading,
  onChooseMenu,
  activeMenuItem,
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
  const chooseActiveMenuItem = (i) => {
    onChooseMenu(i);
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
      <div className="cards-menu">
        {cardMenu.map((item, index) => (
          <p
            key={index}
            onClick={() => {
              chooseActiveMenuItem(index);
            }}
            className={index === activeMenuItem ? "choosed" : ""}
          >
            {item}
          </p>
        ))}
      </div>

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

      {/* <div className="cardContainer">
        <Card flip={flip} classMode={"card short"} />
      </div> 
       <article>
        <h2 className="title">
          <span className="red">D</span>ay of Rolex
        </h2>
        <p className="subtitle">Daily rubric of what? ...</p>

        <p>
          <span className="red">T</span>oday we celebrate The International Day
          of Folex. Lorem ipsum dolor sit amet consequetur amatur de alesan.
          Orde lando salom trea liciy Rreyne samoldano; ursa etra el abaddon.
          Lorem ipsum dolor sit amet consequetur amatur de alesan. Orde lando
          salom trea liciy Rreyne samoldano; ursa etra el abaddon.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel
          itaque dignissimos nulla quidem neque nam iusto consequatur nihil,
          dicta error atque corporis doloribus officia, odio debitis! Odio,
          fugit ad? De alesan. Orde lando salom trea liciy Rreyne samoldano;
          ursa etra el abaddon. Lorem ipsum dolor sit amet consequetur amatur de
          alesan. Orde lando salom trea liciy Rreyne samoldano; ursa etra el
          abaddon.
        </p>
        <p>
          Lorem ipsum dolor sit amet consequetur amatur de alesan. Orde lando
          salom trea liciy Rreyne samoldano; ursa etra el abaddon. Dicta error
          atque corporis doloribus officia, odio debitis! Odio, fugit ad?
        </p>
      </article> */}
    </>
  );
}

export default Home;
