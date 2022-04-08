import axios from "axios";
import { useState, useEffect } from "react"
import Countries from "./components/Countries";
import ShowCountry from "./components/ShowCountry";

const App = () => {

  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState([]);
  const [countryDetail, setCountryDetail] = useState([]);
  // const [weather, setWeather] = useState([])

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
    setCountryDetail('')
  };

  const showDetail = event => setCountryDetail(event.target.value);

  let filtered = countries.filter(country => country.name.common.includes(newCountry));
  const showCountry = countries.filter(country => country.name.common === countryDetail)
  
  return (
    <div id="wrapper">

      <form>
        <label htmlFor="countrySearch">Search Countries</label>
        <input newcountry={newCountry} onChange={handleCountry} id="countrySearch"/>
      </form>

      <Countries countries={filtered} showDetail={showDetail}/>

      <ShowCountry showCountry={showCountry} />

    </div>
  )
}

export default App;
