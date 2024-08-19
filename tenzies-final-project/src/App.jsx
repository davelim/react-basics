import { useState } from 'react'
import Die from "./components/Die.jsx"
import './App.css'

/*
 * Challenge:
 * - create a separate App component
 * - import and rende the app component here
 * - in app component, render <main> element
 * - style everything to look like the slide
 */
function App() {

  return (
    <main>
      <div className="dice">
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </main>
  )
}

export default App
