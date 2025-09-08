import { useState } from 'react';
import './App.css'

import Form from './Form';
import Card from './Card';


function App() {

  const [getArchive, setGetArchive] = useState(null)
  const [getName, setGetName] = useState(null)
  const [getOccupation, setGetOccupation] = useState(null)
  const [showCard, setShowCard] = useState(false)

  return (
    <>
      <header className="header">
        <h1 className="title">Card maker</h1>
      </header>

      <main className="main">
        {showCard ? <Card arquivo={getArchive} name={getName} occupation={getOccupation} setShowCard={setShowCard}/> : ""}
        <Form setShowCard={setShowCard} setGetArchive={setGetArchive} setGetName={setGetName} setGetOccupation={setGetOccupation} />
      </main>

      <footer className="footer">
        Made by <b className="author">Nicollas</b>
      </footer>
    </>
  )

}

export default App;
