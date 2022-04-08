import axios from "axios";
import { useState, useEffect } from "react"
import Countries from "./components/Countries";
import ShowCountry from "./components/ShowCountry";

const App = () => {

  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState([]);
  const [countryDetail, setCountryDetail] = useState([]);
  const [weatherDetail, setWeatherDetail] =useState([]);

  const hook = () => {
    axios
     .get('https://restcountries.com/v3.1/all')
     .then(response => {
       setCountries(response.data)
     })
  }
  useEffect(hook, [])

  const handleCountry = event => {
    setNewCountry(event.target.value);
    setCountryDetail('');
    setWeatherDetail('');
  };

  const showDetail = event => { 
    setCountryDetail(event.target.value);
    setWeatherDetail('');
  }

  const api_key = process.env.REACT_APP_API_KEY;

  const getWeather = event => {
    const test = countries.filter(country => country.name.common === event.target.value)
    const lat = test[0].capitalInfo.latlng[0];
    const lon = test[0].capitalInfo.latlng[1];
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
      .then(response => {
        setWeatherDetail(response.data)
      })
  }

  let filtered = countries.filter(country => country.name.common.includes(newCountry));
  const showCountry = countries.filter(country => country.name.common === countryDetail)
  
  return (
    <div id="wrapper">

      <form>
        <label htmlFor="countrySearch">Search Countries</label>
        <input newcountry={newCountry} onChange={handleCountry} id="countrySearch"/>
      </form>

      <Countries 
        countries={filtered} 
        showDetail={showDetail} 
        getWeather={getWeather}
        weatherDetail={weatherDetail}
      />

      <ShowCountry 
        showCountry={showCountry} 
        getWeather={getWeather}
        weatherDetail={weatherDetail}
      />

    </div>
  )
}

export default App;
