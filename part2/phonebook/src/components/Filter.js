const Filter = (newFilter, setNewFilter, handleFilter) => {
  
  const filterPhonebook = () => {
    console.log("hello");
  }

  return (
    <div id="filter">
      <h3>Filter Phonebook</h3>
    
        <input 
          value={newFilter}
          onChange={handleFilter} 
        />

    </div>
  )
}

export default Filter
