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
  const [diceNumbers, setDiceNumbers] = useState(allNewDice(6, 1, 10));
  const diceJSX = diceNumbers.map((n, idx) => <Die key={idx} value={n} />);
  return (
    <main>
      <div className="dice">
        {diceJSX}
      </div>
    </main>
  );
}

export default App
