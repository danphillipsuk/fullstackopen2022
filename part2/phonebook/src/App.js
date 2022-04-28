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

  const deletePerson = (event) => {
    const res = window.confirm(`Delete ${event.target.name} from phonebook?`);
    if(res) {
      axios
      .delete(`http://localhost:3001/api/persons/${event.target.value}`)
      .then(response => {
        const newList = persons.filter(person => person._id !== event.target.value)
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
        setPersons(persons.filter(person => person._id !== event.target.value)) 
      })
    }
  }

  const updatePerson = (id, number) => {
    const url = `http://localhost:3001/api/persons/${id}`;
    const entry = persons.find(p => p._id === id);
    const updatedEntry = {...entry, number: number};
    axios
    .put(url, updatedEntry)
    .then(response => {
      setPersons(persons.map(person => person._id !== id ? person : response.data));
      setMessage(
        `${entry.name}'s number has been modified.`
      )
      setNewName('')
      setNewNumber('')
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    })
  }

  return (
    <div>
      <h1 id="header">Phonebook TEst</h1>
      <Notification message={message} />
      <ErrorNotification message={errorMessage} />
      <AddNewPerson 
        persons={persons} 
        setPersons={setPersons}
        newName={newName} 
        newNumber={newNumber}
        updatePerson={updatePerson}
        handleNameChange={({ target }) => setNewName(target.value)}
        handleNumberChange={({ target }) => setNewNumber(target.value)}
      />

      <Filter 
        persons={persons} 
        setPersons={setPersons}
        newfilter={newfilter}
        deletePerson={deletePerson}
        handleChange={({ target }) => setFilter(target.value)}
      />

    </div>
  )
}

export default App