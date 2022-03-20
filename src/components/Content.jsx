import React from "react";
import { useWeather } from "../context/WeatherContext";
function Content() {
  const { data } = useWeather();

  return (
    <div className="content">
      <div id="city" className="city">
        {data.name} , ${data.sys.country}
      </div>
      <div id="temp" className="temp">
        {Math.floor(data.main.temp)}°C
      </div>
      <div id="desc" className="desc">
        {data.weather[0].description}
      </div>
      <div id="minmax" className="minmax">
        {" "}
        {Math.floor(data.main.temp_min)} °C / $
        {Math.floor(data.main.temp_max)}°C
      </div>
    </div>
  );
}

export default Content;
