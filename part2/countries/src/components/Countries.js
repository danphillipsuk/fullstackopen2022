import Country from "./Country";
import CountryDetail from './CountryDetail';

const Countries = ({countries, showDetail}) =>  {

  if (countries.length > 10) {
    return (
      <p>To many matches, please specify</p>
    )
  }
  else if (countries.length === 1) { 
    return (
      <ul>
        {countries.map(country => 
          <CountryDetail key={country.cca3} loc={country} />
        )}
      </ul>
    )
  } else {
    return (
      <ul>
        {countries.map(country => 
          <Country key={country.cca3} loc={country} showDetail={showDetail} />
        )}
      </ul>
    )
  }
}

export default Countries;