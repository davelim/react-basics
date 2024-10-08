import { useState, useEffect } from 'react';
import Confetti from "react-confetti";
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
    {length: 10},
    () => generateNewDie()
  );
}
function App() {
  const [dice, setDice] = useState(allNewDice(6));
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    console.log("Dice state changed!");
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [dice]);

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
      <button onClick={rollDice} className="roll-button">{tenzies ? "New Game":"Roll"}</button>
      {tenzies && <Confetti />}
    </main>
  );
}

export default App
