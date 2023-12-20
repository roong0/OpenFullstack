import { useState, useEffect } from 'react'
import Numbers from './Numbers'
import Phonebook from './Phonebook';
import Form from './Form';
import axios from 'axios';

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
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);
        //Assumes all visible for first render(Cant set it to persons as it renders only does this some time in the future)
        setVisitblePersons(response.data);
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
