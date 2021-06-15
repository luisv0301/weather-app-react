import React from "react";
import "./Result.css";

//images
import cloudy from "../animated/cloudy.svg";
import overcastCloud from "../animated/cloudy-day-3.svg";
import night from "../animated/night.svg";
import snowy from "../animated/snowy-5.svg";
import thunder from "../animated/thunder.svg";
import rainy from "../animated/rainy-2.svg";
import lightRain from "../animated/rainy-1.svg";
import clear from "../animated/day.svg";
import scattered from "../animated/cloudy-day-2.svg";
import showerRain from "../animated/rainy-6.svg";

export default function Result({ main, weather, visibility, id }) {
  const kelvinConversion = main.temp - 273.15;
  const weatherDescription = weather[0].description;
  console.log("el clima", weatherDescription, id);
  console.log(id);

  const icon = {
    "clear sky": clear,
    "few clouds": cloudy,
    "scattered clouds": scattered,
    "broken clouds": cloudy,
    "shower rain": showerRain,
    "light rain": lightRain,
    "overcast clouds": overcastCloud,
    rain: rainy,
    thunderstorm: thunder,
    snow: snowy,
  };

  const getIcon = () => {
    return icon[weatherDescription] || night;
  };

  return (
    <div className="card">
      <div className="center_div">
        <img src={getIcon()} alt={weatherDescription} className="img" />
        <h4 className="weather_description_h4">{weatherDescription}</h4>
      </div>
      <h2 className="card_h2">{kelvinConversion.toFixed(2)} °C</h2>
      <p className="card_p">Pressure: {main.pressure} hPa</p>
      <p className="card_p">Humidity: {main.humidity} %</p>
      <p className="card_p">Visibility: {visibility} m</p>
    </div>
  );
}
