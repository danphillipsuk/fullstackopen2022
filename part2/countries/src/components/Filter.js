const Filter = ({countries, newCountry, handleCountry}) => {
  console.log(countries);

  let filtered = countries.filter(country =>country.name.common === newCountry);

  console.log(filtered)

  return (
    <form>
      <label htmlFor="countrySearch">Search Countries</label>
      <input newcountry={newCountry} onChange={handleCountry} id="countrySearch"/>
    </form>
  )
}

export default Filter