import './App.css';
import contactsList from './contacts.json'
import {useState} from 'react'


const firstContacts = contactsList.splice(0,5)
// const remainingContacts = contactsList.splice(5, contactsList.length)

function App() {

  const [contacts, setContacts] = useState(firstContacts)


  const addContact = () => {
    let newContact = contactsList[Math.floor(Math.random() * contactsList.length)]
    console.log(newContact)
    setContacts(contacts => [newContact, ...contacts])

  }

  const sortByName = () => {
    let sortedList = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    setContacts([...sortedList])
  }

  const sortByPopularity = () => {
    let sortedList = contacts.sort((a, b) => {
      return b.popularity - a.popularity
  })
    setContacts([...sortedList])
  }   

  const deleteContact = (id) => {
    let newList = contacts.filter((cont) => {
     return cont.id !== id
    })
    setContacts(newList)
    
  }

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button class='mainButton' onClick={addContact}>Add a random contact</button>
    <button class='mainButton' onClick={sortByPopularity}>Sort by popularity</button> 
    <button class='mainButton' onClick={sortByName}>Sort by name</button> 

    <table className="tableMain">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody> 
    {contacts.map(contact => {
    return (
      <tr>
        <td>
          <img src={contact.pictureUrl} style={{
                width: '75px' }}/> 
        </td>
        <td>
          <p>{contact.name}</p>
        </td>
        <td>
          <p>{contact.popularity.toFixed(2)}</p>
        </td>
        <td>
            {contact.wonOscar && <p>🏆</p>}
        </td>
        <td>
            {contact.wonEmmy && <p>⭐</p>}
        </td>
        <td>
        <button class="deleteButton" onClick={() => deleteContact(contact.id)}>Delete</button>
        </td>
      </tr>
    )
    }
    )}
     </tbody>
    </table>
    </div>
  );
}

export default App;
