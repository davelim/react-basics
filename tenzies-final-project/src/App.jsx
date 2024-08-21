import { useState } from 'react';
import { nanoid } from "nanoid";
import Die from "./components/Die.jsx";
import './App.css'


function allNewDice(max, min = 1, len = 10) {
  const numArr = Array.from(
    {length: len},
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
  return numArr.map(n => {return {
    value: n,
    isHeld: false,
    id: nanoid()
  }});
}
function App() {
  const [dice, setDice] = useState(allNewDice(6));
  let diceElements = dice.map(d => <Die key={d.id} value={d.value} isHeld={d.isHeld} />);

  function rollDice() {
    setDice(allNewDice(6));
  }

  return (
    <main>
      <div className="dice">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll-button">Roll</button>
    </main>
  );
}

export default App
