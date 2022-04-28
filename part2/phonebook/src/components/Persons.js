import People from "./People";

const Persons = ({persons, setPersons, deletePerson }) => {

  return (
    <ul id="phoneBook">
      {persons.map(people => 
        <People 
          key={people._id} 
          individual={people} 
          setPersons={setPersons} 
          persons={persons}
          deletePerson={deletePerson}
        />
      )}
    </ul>
  )
}

export default Persons