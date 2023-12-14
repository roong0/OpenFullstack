import { useState } from 'react'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'0123456' }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


  const addNote = (event) => {
    event.preventDefault();
    if (persons.filter(e=>e.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      // Doesnt check for valid phonenumber input 
      setPersons(persons.concat({name:newName, number:newNumber}));
    } 
  }


  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }
   
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input onChange={handleNoteChange}/>
        </div>
        <div>
          number: <input onChange={handleNumberChange}/>
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
// Also removes onSubmit={addNote} from the <div/> around the input form.

// The examples on the course page has value={newNote} in the <input> component.
// However, it seems to work fine without it. I am not sure what that does.
  //const newNote = (event) => {
  //  setNewName(event.target.value);
  //}
