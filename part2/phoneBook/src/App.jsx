import { useState } from 'react'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newPerson, setNewPerson] = useState('');

  const [visiblePersons, setVisitblePersons] = useState(persons);


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
    setNewNumber(event.target.value);
  }
  const handleSearch = (event) => {
    setNewPerson(event.target.value);
  }

  const showFiltered = (event) => {
    event.preventDefault(); // Otherwise page refreshes by default.
    // Will not show if a persons is added after the filter already done.
    let peeps = persons;
    peeps = peeps.filter((x)=>x.name.toLowerCase().includes(newPerson.toLowerCase()));
    setVisitblePersons(peeps);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={showFiltered}>
        <div>
          filter shown with: <input onChange={handleSearch}/>
        </div>
      </form>

      <h2>add a new</h2>
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
      <Numbers persons={visiblePersons}/>
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
