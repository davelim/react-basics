import { useState } from 'react'
import Die from "./components/Die.jsx"
import './App.css'


function allNewDice(max, min = 0, len = 1) {
  return Array.from(
    {length: len},
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}
function App() {
  console.log(allNewDice(6, 1, 6));
  return (
    <main>
      <div className="dice">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </main>
  )
}

export default App
