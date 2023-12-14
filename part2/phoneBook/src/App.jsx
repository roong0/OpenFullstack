import { useState } from 'react'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addNote = (event) => {
    event.preventDefault();
    if (persons.filter(e=>e.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({name:newName}));
    }
    
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
   
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input onChange={handleNoteChange}/>
        </div>
        <div>
          <button type="submit" onClick={addNote}>add</button>
        </div>
      </form>

      <Numbers persons={persons}/>
    </div>
  )
}

export default App
// The examples on the course page has value={newNote} in the <input> component.
// However, it seems to work fine without it. I am not sure what that does.
  //const newNote = (event) => {
  //  setNewName(event.target.value);
  //}
