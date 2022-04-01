const People = ({ individual }) => {

  return (
    <li>{individual.name}<span>{individual.number}</span></li>
  )
}

export default People;