import Languages from "./Languages";

const CountryDetail = ({loc}) => {

  const lat = loc.capitalInfo.latlng[0]
  const lon = loc.capitalInfo.latlng[1]

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
    </div>
  )
}

export default CountryDetail