const People = ({ individual, deletePerson }) => {

  return (
    <li>
      {individual.name}
      <button 
        onClick={deletePerson} 
        value={individual._id}
        name={individual.name}
        >
          Delete
      </button>
      <span>{individual.number}</span>
    
    </li>
  )
}

export default People;