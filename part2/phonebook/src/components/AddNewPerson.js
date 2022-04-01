const AddNewPerson = ({ persons, newName, handleNameChange, setNewName, setPersons, newNumber, setNewNumber, handleNumberChange }) => {

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const duplicateName = persons.some(person => person.name === newName)

    if(duplicateName) {
      alert(`${newName} already exists in phonebook.`)
      setNewName('');
      return
    }

    if(newName === '' || newNumber === '') {
      alert("Please enter a name and phone number")
      return
    }

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  }

  return (
    <form onSubmit={addPerson}>
      <div className="addPersonInputs">
        <label htmlFor = "name">Name</label>     
        <input 
          value={newName}
          onChange={handleNameChange} 
          id='name'
        />
      </div>
      <div className="addPersonInputs">
        <label htmlFor = "number">Number</label>         
        <input 
          value={newNumber}
          onChange={handleNumberChange} 
          type='number'
          id='number'
        />
      </div>
      <br />
      <button type="submit">Add Person</button>
    </form>
  )
}

export default AddNewPerson