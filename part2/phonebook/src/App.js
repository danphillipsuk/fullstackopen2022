import { useState } from 'react'
import Filter from './components/Filter';
import AddNewPerson from './components/AddNewPerson';
import Persons from './components/Persons';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Anthony Musk', number: '39-44-5323523', id: 3 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 4 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 5 },
    { name: 'Arnold Brent', number: '39-44-5323523', id: 6 },
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setFilter] = useState('');

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilter = (event) => setFilter(event.target.value)



  let filtered;
  let peopleToShow;

  if(newFilter.length > 0) {
    let len = newFilter.length-1;
    filtered = persons.filter(person => person.name[len] === newFilter[len] && person.name[len-1] === newFilter[len-1] )
  }

  if (filtered) { 
    peopleToShow = filtered; 
  } else { 
    peopleToShow = persons;
  }



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

      <div id="filter">
        <form>
          <label htmlFor="filterInp">Search Phonebook</label>
          <input value={newFilter} onChange={handleFilter} id="filterInp"/>
        </form>
      </div>
      
      <Persons persons={peopleToShow}/>

      {/* <Filter 
        newFilter={newFilter}
        setFilter={setFilter}
        handleFilter={handleFilter}
      /> */}

    
      
      
    </div>
  )
}

export default App