import Persons from "./Persons"
const Filter = ({persons, newfilter, handleFilter}) => {

  let filtered;
  let peopleToShow;

  if(newfilter.length > 0) {
    let len = newfilter.length-1;
    filtered = persons.filter(person => person.name[len] === newfilter[len] && person.name[len-1] === newfilter[len-1] )
  }

  if (filtered) { 
    peopleToShow = filtered; 
  } else { 
    peopleToShow = persons;
  }

  return (
    <>
      <div id="filter">
        <form>
          <label htmlFor="filterInp">Search Phonebook</label>
          <input newfilter={newfilter} onChange={handleFilter} id="filterInp"/>
        </form>
      </div>
      <Persons persons={peopleToShow}/>
    </>
  )

}
  
export default Filter
