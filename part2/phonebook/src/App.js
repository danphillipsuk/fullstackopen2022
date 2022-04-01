import { useState } from 'react'
import People from './components/People';
import Filter from './components/Filter';
import AddNewPerson from './components/AddNewPerson';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);


  // const [newFilter, setFilter] = useState('');
  // const [showAll, setShowAll] = useState(true);

  // const handleFilter = (event) => {
  //   setShowAll(false)
  //   setFilter(event.target.value);
  // }

  // const filteredPerson = showAll ? persons : persons.filter(person => { 
  //   return person.name === newFilter
  // })




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

      <Filter />

      {/* <form>
        <label htmlFor = "filter">Filter         
          <input 
            value={newFilter}
            onChange={handleFilter} 
            id='filter'
          />
        </label>
      </form> */}

    
      <h2>Numbers</h2>
        <ul id="phoneBook">
          {persons.map(people => 
            <People key={people.id} individual={people} />
            )}
        </ul>
    </div>
  )
}

export default App