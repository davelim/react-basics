import { useState } from 'react';
import { nanoid } from "nanoid";
import Die from "./components/Die.jsx";
import './App.css'


function generateNewDie() {
  return {
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid()
  }
}
function allNewDice() {
  return Array.from(
    {length: 6},
    () => generateNewDie()
  );
}
function App() {
  const [dice, setDice] = useState(allNewDice(6));

  function rollDice() {
    setDice(oldDice => oldDice.map(d => {
      return d.isHeld
        ? d
        : generateNewDie()
    }));
  }

  function holdDie(event, id) {
    event.stopPropagation();
    setDice(oldDice => oldDice.map(d => {
      return d.id === id
        ? {...d, isHeld: !d.isHeld}
        : d;
    }));
  }

  const diceElements = dice.map(d =>
    <Die
      key={d.id}
      die={d}
      handleClick={holdDie}
    />
  );
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll-button">Roll</button>
    </main>
  );
}

export default App
