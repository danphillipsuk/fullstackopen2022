import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import AddNewPerson from './components/AddNewPerson';
import axios from 'axios';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newfilter, setFilter] = useState('');

  const hook = () => {
    axios
     .get('http://localhost:3001/persons')
     .then(response => {
       setPersons(response.data)
     })
  }

  useEffect(hook, [])

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilter = (event) => setFilter(event.target.value)

  return (
    <div>
      <h1 id="header">Phonebook</h1>

      <AddNewPerson 
        persons={persons} 
        setPersons={setPersons}
        newName={newName} 
        setNewName={setNewName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleNumberChange={handleNumberChange}
      />

      <Filter 
        persons={persons} 
        newfilter={newfilter}
        handleFilter={handleFilter}
        setFilter={setFilter}
      />

    </div>
  )
}

export default App