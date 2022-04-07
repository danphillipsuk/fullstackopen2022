import People from "./People";

const Persons = ({persons, setPersons }) => {
  return (
    <ul id="phoneBook">
      {persons.map(people => 
        <People key={people.id} individual={people} setPersons={setPersons} persons={persons}/>
      )}
    </ul>
  )
}

export default Persons