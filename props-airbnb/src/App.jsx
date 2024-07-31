import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

import './App.css';


function App() {
  const cardsJSX = data.map(o => {
    return (
      <Card key={o.id} item={o} />
    );
  });

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardsJSX}
      </section>
    </div>
  )
}

export default App
