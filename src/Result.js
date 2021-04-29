import React from 'react';
import './Result.css';

export default function Result({main, weather, visibility}) {

    const kelvinConversion = main.temp - 273.15;
    
    return (
        <div className="card">
            <h2>{kelvinConversion.toFixed(2)} °C</h2>
            <h3>{weather[0].description}</h3>
            <p>pressure: {main.pressure} hPa</p>
            <p>humidity: {main.humidity} %</p>
            <p>visibility: {visibility} m</p>
        </div>
    )
}
