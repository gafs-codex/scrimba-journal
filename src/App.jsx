import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Entry from './components/entry'
import Header from './components/header'
import journalData from './journal'
// import './App.css'
import './scrimba2.css'

function App() {
  const journalElement = journalData.map((journal) => {
    return <Entry
      key={journal.id}
      img={{
        src: journal.img.src,
        alt: journal.img.alt
      }}
      country={journal.country}
      title={journal.title}
      mapLink={journal.googleMapsLink}
      date={journal.dates}
      info={journal.text}
    />
  })
  return (
    <>
      <Header />
      <main className='container'>
        {journalElement}
      </main>
    </>
  )

}
export default App
