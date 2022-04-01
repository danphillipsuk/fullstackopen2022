import People from "./People";

const Persons = ({persons}) => {
  return (
    <ul id="phoneBook">
      {persons.map(people => 
        <People key={people.id} individual={people} />
      )}
    </ul>
  )
}

export default Persons