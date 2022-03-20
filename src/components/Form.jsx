import { React, useState } from "react";
import { useWeather } from "../context/WeatherContext";

function Form() {
  const [input, setInput] = useState("");
  const { setCity } = useWeather();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const getCity = (e) => {
    setCity(input);
    setInput("");
    e.preventDefault();
  };
  return (
    <form className="form">
      <h1>Weather App</h1>
      <input
        type="text"
        className="searchbar"
        value={input}
        onChange={inputHandler}
        placeholder="Enter a City"
      />
      <button className="btn" onClick={getCity}>Submit</button>
    </form>
  );
}

export default Form;
