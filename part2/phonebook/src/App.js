import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import AddNewPerson from './components/AddNewPerson';
import personService from './services/persons';
import Notification from './components/Notification';
import ErrorNotification from './components/ErrorNotification';
import axios from 'axios';


const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newfilter, setFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    personService
      .getAll()
      .then(initialPeople => {
        setPersons(initialPeople)
      })
  }, []);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilter = (event) => setFilter(event.target.value)

  const deletePerson = (event) => {
    const res = window.confirm(`Delete ${event.target.name} from phonebook?`);
    if(res) {
      axios
      .delete(`http://localhost:3001/persons/${event.target.value}`)
      .then(response => {
        const newList = persons.filter(person => person.id != event.target.value)
        setPersons(newList)
        setMessage(
          `${event.target.name} has been deleted from the phonebook`
        )
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      })
      .catch(error => {
        setErrorMessage(
          `${event.target.name} has already been deleted from the phonebook`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
        setPersons(persons.filter(person => person.id != event.target.value)) 
      })
    }
  }

  const updatePerson = (id, number) => {
    console.log(id)
    const url = `http://localhost:3001/persons/${id}`;
    const entry = persons.find(p => p.id === id);
    const updatedEntry = {...entry, number: number};
    axios
    .put(url, updatedEntry)
    .then(response => {
      setPersons(persons.map(person => person.id !== id ? person : response.data));
      setMessage(
        `${entry.name}'s number has been modified.`
      )
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    })
  }

  return (
    <div>
      <h1 id="header">Phonebook</h1>
      <Notification message={message} />
      <ErrorNotification message={errorMessage} />
      <AddNewPerson 
        persons={persons} 
        setPersons={setPersons}
        newName={newName} 
        setNewName={setNewName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleNumberChange={handleNumberChange}
        updatePerson={updatePerson}
      />

      <Filter 
        persons={persons} 
        setPersons={setPersons}
        newfilter={newfilter}
        handleFilter={handleFilter}
        setFilter={setFilter}
        deletePerson={deletePerson}
      />

    </div>
  )
}

export default App