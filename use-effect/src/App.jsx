import { useState, useEffect } from 'react'
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

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={handleClick}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default App;