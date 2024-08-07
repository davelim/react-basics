import { useState } from 'react';
import boxesArr from "./boxes";

import Box from "./Box";

import './App.css'

function App(props) {
  const [boxes, setBoxes] = useState(boxesArr);

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
      <h1>Boxes will go here</h1>
      {boxesJSX}
    </main>
  )
}

export default App