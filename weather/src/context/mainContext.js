import { createContext } from "react";
import data from "../dataCity/cities.json";
import { useState, useEffect } from "react";
import axios from "axios";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("Ankara");

  useEffect(() => {
    console.log(city);
    const selectCities = data.filter((item) => item.name === city)[0];
    const key = "14a434db4dbd4882a21134320230205";

    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}%20&q=${selectCities.latitude},${selectCities.longitude}&days=8&aqi=no&alerts=no`
      )
      .then((res) => res.data)
      .then((res) => {
        setWeather(res.forecast.forecastday);
      })
      .catch((e) => console.log("hata"));
  }, [city]);
  const values = { weather: weather, setWeater: setWeather, city, setCity };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default MainContext;
