const Phonebook = (props) => {
   
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={props.onSubmit}>
            <div>
            filter shown with: <input onChange={props.onChange}/>
            </div>
        </form>
      </div>
    )
  }
  
  export default Phonebook
