const Country = ({loc, showDetail}) => {
  
  return (
    <div>
      <p>{loc.name.common} 
        <button onClick={showDetail} value={loc.name.common}>show</button>
      </p>
    </div>
  )
}

export default Country