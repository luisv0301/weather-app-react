import { useState } from 'react';

import './App.css';
import Searchbar from './Searchbar';
import Result from './Result';
import MainSkeleton from './MainSkeleton';

function App() {
  const[cityName, setCityName] =useState("");
  const[city, setCity]=useState([]);
  const[cityInfo, setCityInfo]=useState(null);
  const[loading, setLoading]=useState(false);
  
  const API = "f6370cc1ec197a945343dcd03a1e68dd";

  const fetchData = async () =>{
    try {
      setLoading(true)
      
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API}`);
      const newResp = await resp.json();
      const cityInfos = newResp.city;
      const cityWeather = newResp.list.slice(0, 5);
      setLoading(false);
      setCityName("");
      setCity(cityWeather);
      setCityInfo(cityInfos);
      
    } catch (error) {
      console.log(error);  
    }
   
  }

  return (
    <div className="app">
      <h1>Weather app</h1>
      <Searchbar 
      cityName={cityName} 
      setCityName={setCityName}
      fetchData={fetchData}/>
      {loading && <MainSkeleton/>}
      {loading && <h3>Loading...</h3>}
      {cityInfo && (<h3>{cityInfo?.name}, {cityInfo?.country}</h3>)}
      {city.map((c, index) => <Result {...c} key={index}/>)}
    </div>
  );
}

export default App;
