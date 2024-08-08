import { useState, useEffect } from 'react';
import WindowTracker from "./WindowTracker";
import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(prev => prev + 1);
  }

  console.log("Component rendered");
  
  useEffect(() => {
    console.log("Effect ran");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data));
  }, [count]);

  const [show, setShow] = useState(true);
  function toggle() {
    setShow(prev => !prev);
  }

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={handleClick}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <hr/>
      <button onClick={toggle}>
        Toggle WindowTracer
      </button>
      {show && <WindowTracker />}
    </div>
  )
}

export default App;