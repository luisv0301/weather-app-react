import React from 'react';
import './Result.css';
import cloudy from './animated/cloudy.svg';
import night from './animated/night.svg'
import snow from './animated/snowy-5.svg'
import thunderstorm from './animated/thunder.svg'
import rainy from './animated/rainy-2.svg'
import clear from './animated/day.svg'
import  scattered from './animated/cloudy-day-2.svg'
import showerRain from './animated/rainy-6.svg'

export default function Result({main, weather, visibility}) {

    const kelvinConversion = main.temp - 273.15;
    const getIcon = () => {
        if( weather[0].description === "clear sky") return clear
        if( weather[0].description === "few clouds") return cloudy
        if( weather[0].description === "scattered clouds") return scattered
        if( weather[0].description === "broken clouds") return cloudy
        if( weather[0].description === "shower rain") return showerRain
        if( weather[0].description === "rain") return rainy
        if( weather[0].description === "thunderstorm") return thunderstorm
        if( weather[0].description === "snow") return snow
        return night
    }
    
    return (
        <div className="card">
            <div className="center_div">
                <img src={getIcon()} alt={weather[0].description} className="img"/>
                <h4 className="weather_description_h4">{weather[0].description}</h4>
            </div>
            <h2 className="card_h2">{kelvinConversion.toFixed(2)} °C</h2>
            <p className="card_p">pressure: {main.pressure} hPa</p>
            <p className="card_p">humidity: {main.humidity} %</p>
            <p className="card_p">visibility: {visibility} m</p>
        </div>
    )
}
