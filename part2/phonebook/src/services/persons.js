import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const deletePerson = (id, name, persons, setPersons) => {
  const res = window.confirm(`Delete ${name} from phonebook?`)
    if(res) {
      axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(response => {
        const newList = persons.filter(person => person.id != id)
        setPersons(newList)
      })
    }
}

const update = (id, number, persons, setPersons) => {
  const url = `http://localhost:3001/persons/${id}`;
  const entry = persons.find(p => p.id === id)
  const updatedEntry = {...entry, number: number}
  axios
    .put(url, updatedEntry)
    .then(response => {
      setPersons(persons.map(person => person.id !== id ? person : response.data))
    })
}

export default {
  getAll,
  create,
  deletePerson,
  update
}


