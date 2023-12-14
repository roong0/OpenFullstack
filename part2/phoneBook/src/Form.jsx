const Form = (props) => {
   
    return (
      <div>
        <h2>add a new</h2>
        <form onSubmit={props.addNote}>
            <div>
            name: <input onChange={props.handleNoteChange}/>
            </div>
            <div>
            number: <input onChange={props.handleNumberChange}/>
            </div>
            <div>
            <button type="submit" onClick={props.addNote}>add</button>
            </div>
        </form>
      </div>
    )
  }
  
  export default Form