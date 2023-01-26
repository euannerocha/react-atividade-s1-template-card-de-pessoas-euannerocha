// import { useState, useSyncExternalStore } from 'react'
import CreateUser from './components/Developer'
// import reactLogo from './assets/react.svg'
import './App.css'

function App() { 
  const users = [
    {
      name: 'Gabriel',
      age: 19,
      country: 'Brasil'
    },
    {
      name: 'Filipe',
      age: 28,
      country: 'Brasil'
    },
    {
      name: 'Mariana',
      age: 24,
      country: 'Itália'
    }
  ]

  return (
    <main>
      {
        users.map(user => {
          return(
            <CreateUser key={user.name} name={user.name} age={user.age} country={user.country}/>
          )
        })
      }
    </main>
  )
}

export default App
