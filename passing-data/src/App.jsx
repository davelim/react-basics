import { useState } from 'react';
import boxesArr from "./boxes";

import Box from "./Box";

import './App.css'

function App(props) {
  const [boxes, setBoxes] = useState(boxesArr);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleChange(event) {
    if (event.target.name == "firstName")
      setFirstName(event.target.value);
    if(event.target.name == "lastName")
      setLastName(event.target.value);
  }

  function toggle(id) {
    setBoxes((prevBoxes) => {
      return prevBoxes.map(b =>
          b.id === id
            ? {...b, on: !b.on}
            : b
      );
    });
  }

  const boxesJSX = boxes.map(b => (
    <Box
      key={b.id}
      on={b.on}
      handleClick={() => toggle(b.id)}/>
  ));

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
        />
        <p>Hello {firstName} {lastName}!</p>
      </form>
      <h1>Boxes will go here</h1>
      {boxesJSX}
    </main>
  )
}

export default App