import {useState} from "react";

import Header from "./components/Header";
import Meme from "./components/Meme";

import './App.css'

function App() {
  const [things, setThings] = useState(["Thing 1", "Thing 2"]);

  function handleClick() {
    const newThing = `Thing ${things.length+1}`;
    setThings([...things, newThing]);
  }

  const thingsJSX = things.map((t, i) => <p key={i}>{t}</p>);

  return (
    <div className="app">
      <Header />
      <Meme />
      <button onClick={handleClick}>Add Item</button>
      {thingsJSX}
    </div>
  )
}

export default App
