import personService from '../services/persons'

const People = ({ individual, persons, setPersons }) => {

  const deletePerson = (event) => {
    const userId = event.target.value;
    const userName = event.target.name;
    personService
      .deletePerson(userId, userName, persons, setPersons) 
  }

  return (
    <li>
      {individual.name}
      <button 
        onClick={deletePerson} 
        value={individual.id}
        name={individual.name}
      >Delete</button>
      <span>{individual.number}</span>
    
    </li>
  )
}

export default People;