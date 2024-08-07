import { useState } from 'react';
import boxesArr from "./boxes";

import Box from "./Box";

import './App.css'

function App(props) {
  const [boxes, setBoxes] = useState(boxesArr);

  const boxesJSX = boxes.map(b =>  (
    <Box key={b.id} on={b.on} />
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      {boxesJSX}
    </main>
  )
}

export default App