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
}) {
  const [inputValue, setInputValue] = React.useState(location);
  const checkCityname = (event) => {
    if (event.key === "Enter") {
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
  const chooseActiveMenuItem = (i) => {
    onChooseMenu(i);
  };
  return (
    <>
      {todayData && (
        <Mobile
          todayData={todayData}
          pos={pos}
          showCurrentDate={showCurrentDate}
        />
      )}
      <h2 className="title">
        <span className="red">N</span>
        earest weather
      </h2>
      <p className="subtitle">
        Here you will see nearest weather forecast in your city. City you
        looking now <a href="#location">{location}</a>
      </p>
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
          <Card key={index} flipMode={0} {...item} loading={isLoading} />
        ))}
      </div>

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
      {/* <h2 className="title">
        <span className="red">F</span>orecast in nearest cities
      </h2> */}
      <div className="cardContainer">
        {/* <Card flip={flip} classMode={"card short"} /> */}
      </div>
      {/* <article>
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
