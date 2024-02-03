import { useState } from "react";

function Input({ city, setCity, getCoordinates }) {
  const [inputValue, setInputValue] = useState("Minsk");

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const getCity = () => {
    getCoordinates(inputValue).then((res) => setCity(res));
  };

  return (
    <>
      {city ? (
        <h2 className="title">
          <span className="red">W</span>
          {"eather in " + city}
        </h2>
      ) : (
        <h2 className="title">Invalid city, check the input</h2>
      )}

      {/* <p className="subtitle">
        The weather is shown in the last currently entered city{" "}
      </p> */}
      <form
        className="select"
        action="#"
        method="get"
        onSubmit={function (e) {
          e.preventDefault();
          getCity();
        }}
      >
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
          onChange={onChangeInput}
        />
      </form>
    </>
  );
}

export default Input;
