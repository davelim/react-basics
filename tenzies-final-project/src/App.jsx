import { useState, useEffect } from 'react';
import Die from "./components/Die.jsx";
import './App.css'


function allNewDice(max, min = 1, len = 10) {
  return Array.from(
    {length: len},
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}
function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice(6));
  let diceJSX = diceNumbers.map((n, idx) => <Die key={idx} value={n} />);

  function rollDice() {
    setDiceNumbers(allNewDice(6));
  }

  return (
    <main>
      <div className="dice">
        {diceJSX}
      </div>
      <button onClick={rollDice} className="roll-button">Roll</button>
    </main>
  );
}

export default App
