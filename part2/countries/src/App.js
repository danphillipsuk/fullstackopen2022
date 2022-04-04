import axios from "axios";
import { useState, useEffect } from "react"
import Filter from "./components/Filter";

const App = () => {

  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState([]);

  const hook = () => {
    axios
     .get('https://restcountries.com/v3.1/all')
     .then(response => {
       setCountries(response.data)
     })
  }

  useEffect(hook, [])

  const handleCountry = (event) => setNewCountry(event.target.value)

  return (
    <Filter 
      countries={countries}
      newCountry={newCountry}
      handleCountry={handleCountry}
    />
  );
}

export default App;
