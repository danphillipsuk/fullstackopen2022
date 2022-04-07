const People = ({ individual, deletePerson }) => {

  return (
    <li>
      {individual.name}
      <button 
        onClick={deletePerson} 
        value={individual.id}
        name={individual.name}
        >
          Delete
      </button>
      <span>{individual.number}</span>
    
    </li>
  )
}

export default People;