import { useState } from 'react'
import People from './components/People';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1 },
    { name: 'Alan',
      id: 2 }
  ]) 

  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1
    }
    const duplicate = persons.some(person => person.name === newName)
    if(duplicate) {
      alert(`${newName} already exists in phonebook.`)
      return
    }
    setPersons(persons.concat(personObject));
    setNewName('');
  }



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          Name: <input 
                  value={newName}
                  onChange={handleNameChange} 
                />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(people => 
            <People key={people.id} individual={people} />
            )}
        </ul>
    </div>
  )
}

export default App