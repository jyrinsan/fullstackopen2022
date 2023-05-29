import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1231244' 
    },
    { 
      name: 'Aamu Aurinko',
      number: '050-331898' 
    },
    { 
      name: 'Ilta Rusko',
      number: '044-78-12345' 
    },
    { 
      name: 'Noora Nörtti',
      number: '0430-565656' 
    },
  ]) 
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const newPersons = persons.concat(personObject)
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(newPersons)
      filterPersons(newPersons, filter)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    filterPersons(persons, event.target.value)
  }

  const filterPersons = (persons, filter) => {
    setFilteredPersons(persons.map(person => 
      person.name.toUpperCase().includes(filter.toUpperCase()) ? person : ''))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={filter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {filteredPersons.map(person => {
          return <p key={person.name}>{person.name} {person.number}</p>}
          )
        }
    </div>
  )
}

export default App;