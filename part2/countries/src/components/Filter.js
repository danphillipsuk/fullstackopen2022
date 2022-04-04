import Countries from "./Countries";
const Filter = ({countries, newCountry, handleCountry}) => {


  let filtered = countries.filter(country => country.name.common.includes(newCountry)
);
  

  return (
    <>
      <form>
        <label htmlFor="countrySearch">Search Countries</label>
        <input newcountry={newCountry} onChange={handleCountry} id="countrySearch"/>
      </form>
      <Countries countries={filtered} />
    </>
  )
}

export default Filter