import { useState, useEffect } from 'react'
import Numbers from './Numbers'
import Phonebook from './Phonebook';
import Form from './Form';
import axios from 'axios';

import noteService from './services/notes';

const App = () => {
  const [persons, setPersons] = useState([]) 
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
      noteService
        .create({name:newName, number:newNumber})
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote))
          setNewPerson('')
          setVisitblePersons(persons.concat(returnedNote))
        })
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
  useEffect(() => {
    noteService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons);
        setVisitblePersons(allPersons);
      })
  }, [])

  return (
    <div>
      <Phonebook onChange={handleSearch} onSubmit={showFiltered}/>
      <Form addNote={addNote} handleNoteChange={handleNoteChange} handleNumberChange={handleNumberChange} />
      <Numbers persons={visiblePersons}/>
    </div>
  )
}

export default App
