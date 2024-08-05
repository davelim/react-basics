import Header from "./components/Header";
import Meme from "./components/Meme";
import './App.css'

function App() {
  let n = 3;
  const thingsArray = ["Thing 1", "Thing 2"];

  function handleClick() {
    thingsArray.push(`Thing ${n++}`);
    console.log(thingsArray);
  }

  const thingsJSX = thingsArray.map((t, i) => <p key={i}>{t}</p>);

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
