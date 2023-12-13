const Numbers = (props) => {
   
    return (
      <div>
        <h2>Numbers</h2>
        {props.persons.map(name => 
          <p key={name.name}>{name.name}</p> 
      )}
      </div>
    )
  }
  
  export default Numbers