import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Weather() {
  const weatherData = useSelector((state) => state.weatherReducer.citiesData);
  if (!weatherData.location || !weatherData.current || !weatherData.forecast) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="weather">
      <h1 className="weather__title">{weatherData.location.region}</h1>
      <div className="weather__group">
        <div className="weather__group__box">
          <div className="weather__group__box__content">
            <img
              className="weather__group__box__content__img"
              src={weatherData.current.condition.icon}
              alt=""
            />
            <p className="weather__group__box__content__desc">
              {weatherData.current.condition.text}
            </p>
          </div>
          <h1 className="weather__group__box__temp">
            {weatherData.current.temp_c}°C
          </h1>
          <ul className="weather__group__box__list">
            <li className="weather__group__box__list__wind">
              Wind:
              {weatherData.current.wind_kph}
              kmph
            </li>
            <li className="weather__group__box__list__precip">
              Precip:
              {weatherData.current.precip_in}
              mm
            </li>
            <li className="weather__group__box__list__press">
              Pressure
              {weatherData.current.pressure_mb}
              mb
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Weather;
