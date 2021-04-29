import React from 'react';
import './Searchbar.css';

export default function Searchbar({ cityName, setCityName, fetchData}) {
    
    return (
        <>
            <form className="form">
                <input type="text"
                placeholder="City"
                value={ cityName}
                onChange={e => setCityName(e.target.value)}
                className="input"/>
                <button type="button"
                onClick={fetchData} 
                className="button">Search</button>    
            </form>  
        </>
    )
}
