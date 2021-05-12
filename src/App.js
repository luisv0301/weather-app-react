import { useReducer } from 'react';
import Reducer, { initialValue } from './Reducer.js';

import './App.css';
import Searchbar from './Searchbar';
import Result from './Result';
import MainSkeleton from './MainSkeleton';
import {darkTheme, lightTheme} from './Themes.js';


function App() {

  const [state, dispatch] = useReducer(Reducer, initialValue);
  const API = "f6370cc1ec197a945343dcd03a1e68dd";

  const darkMode = () => {
    dispatch({type: "DARK_MODE"})
    const arr= Object.entries(darkTheme);
    arr.map(([key, value]) => {
      document.body.style.setProperty(`${key}`, `${value}`)
    })
    
  }

  const lightMode = () => {
    dispatch({type: "LIGHT_MODE"})
    const arra= Object.entries(lightTheme);
    arra.map(([key, value]) => {
      document.body.style.setProperty(`${key}`, `${value}`)
    })

  }


  const fetchData = async () => {
    if(state.cityName === ""){
      dispatch({type: "ERROR_EMPTY_SEARCH"})
    }else {
    
    try {
      dispatch({ type: "LOADING" })
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${state.cityName}&appid=${API}`);
      const newResp = await resp.json();
      const cityInfos = newResp.city;
      const cityWeather = newResp?.list.slice(0, 5);
      dispatch({ type: "DATA_RECEIVED", payload: cityWeather, field: cityInfos })

    } catch (error) {
      console.log(error);
      dispatch({type: "ERROR_FETCHING"})
    }

  }
}

  return (
    <div className="app">
      <div className="toggle_btns">
        {state.theme === "light" ? (<button onClick={() => darkMode()} className="btn"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg></button>) :
        (<button onClick={() => lightMode()} className="btn light"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sun_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg></button>)}
      </div>
      <div className="app_container">
        <h1 className="app_h1">Weather app</h1>
        <p className="p_description">This app will allow you to know the weather for the next five days in your city</p>
        <Searchbar
        state={state}
        dispatch={dispatch}
        fetchData={fetchData} />
        {state.fetchError && <h2 className="warning_h2">Ha ocuttido un error, intente buscar otra ciudad</h2>}
        {state.searchWarning ? <p className="warning_p">Ingrese un valor</p> : null}
        {state.loading && <MainSkeleton />}
        {state.cityInfo && (<h3 className="app_h3">{state.cityInfo?.name}, {state.cityInfo?.country}</h3>)}
        {state.city.map((c, index) => <Result {...c} key={index} />)}
      </div>
    </div>
  );
}

export default App;
