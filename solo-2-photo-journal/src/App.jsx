import data from "./data";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

function App() {
  const cardsJSX = data.map((d, idx) =>
    <Card key={idx} details={d} />
  )

  return (
    <div className="app">
      <Header />
      {cardsJSX}
    </div>
  )
}

export default App
