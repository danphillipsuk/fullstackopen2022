import { useState } from 'react'
import People from './components/People';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: 12334567890,
      id: 1 },
    { name: 'Alan',
    number: 123345678620,
      id: 2 }
  ]) 

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const duplicateName = persons.some(person => person.name === newName)
    const duplicateNumber = persons.some(person => person.number === newNumber)

    if((duplicateName) || (duplicateNumber)) {
      alert(`${newName} already exists in phonebook.`)
      return
    }

    setPersons(persons.concat(personObject));
    setNewName('');
  }

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <label htmlFor = "name">Name         
          <input 
            value={newName}
            onChange={handleNameChange} 
            id='name'
          />
        </label>
        <label htmlFor = "number">Number         
          <input 
            value={newNumber}
            onChange={handleNumberChange} 
            type='number'
            id='number'
          />
        </label>
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