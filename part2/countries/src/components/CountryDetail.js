const CountryDetail = ({loc}) => {
  return (
    <div>
      <li>{loc.name.common}</li>
      <li>Capital: {loc.capital}</li>  
      <li>Population: {loc.population}</li>  
      <li><img src={loc.flags.png} alt="flag"></img></li>


      
    </div>
  )
}

export default CountryDetail