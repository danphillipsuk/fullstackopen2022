import Languages from "./Languages";

const ShowCountry = ({showCountry}) => {

  if(showCountry.length === 0) {
    return null
  }

  const country = showCountry[0];
  const dialect = Object.values(country.languages);

  return (
    <ul>
      <li>Country: {country.name.common}</li>
      <li>Capital City: {country.capital}</li>
      <li>Area: {country.area}</li>
      <li>Languages spoken:
      { dialect.map(lang => <Languages key={lang} lang={lang} />)}
      </li>
      <li><img src={country.flags.png} alt="country flag"></img></li>


    </ul>
  )
}

export default ShowCountry