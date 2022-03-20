import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const url = "https://api.openweathermap.org/data/2.5/";
  const key = "8c5bf5034919c1c78e02ce7b5c56a7e2";

  const [data, setdata] = useState([]);
  const [city, setCity] = useState("izmir");
  useEffect(() => {
    getWeather();
  }, [city]);

  const getWeather = async () => {
    const response = axios
      .get(`${url}weather?q=${city}&appid=${key}&units=metric`)
      .then((res) => {
        setdata(res.data);
      });
  };
  const values = {
    city,
    data,
    setdata,
    setCity,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
