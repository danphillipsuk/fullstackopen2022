import personsService from '../services/persons'

const AddNewPerson = ({ 
    persons, 
    newName, 
    handleNameChange, 
    setNewName, 
    setPersons, 
    newNumber, 
    setNewNumber, 
    handleNumberChange, 
    updatePerson
  }) => {

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    if(newName === '' || newNumber === '') {
      alert("Please enter a name and phone number")
      return
    }

    const duplicateName = persons.filter(person => person.name === newName)

    if (duplicateName.length > 0) {
      const entryId = duplicateName[0]._id;
      const res = window.confirm(`${newName} already added to phonebook. Do you want to replace the old number with a new one?`)
      if(res) {
        updatePerson(entryId, newNumber);
      }
      // setNewName('');
      // setNewNumber('');
      return
    }
  
    personsService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      })
  }

  return (
    <form onSubmit={addPerson} id="addPerson">
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