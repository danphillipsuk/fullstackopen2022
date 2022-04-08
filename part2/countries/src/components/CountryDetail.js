import Languages from "./Languages";
import Weather from "./Weather";

const CountryDetail = ({loc, getWeather, weatherDetail}) => {

  const dialect = Object.values(loc.languages)

  return (
    <div>
      <li>{loc.name.common}</li>
      <li>Capital: {loc.capital}</li>  
      <li>Area: {loc.area}</li> 
      <li>Languages: 
        { dialect.map(lang => <Languages key={lang} lang={lang} />)}
      </li>
      <li><img src={loc.flags.png} alt="flag"></img></li>
      <button onClick={getWeather} value={loc.name.common}>Show Weather in {loc.capital}</button>
      <Weather weatherDetail={weatherDetail} />
    </div>
  )
}

export default CountryDetail