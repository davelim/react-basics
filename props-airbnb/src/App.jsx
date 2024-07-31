import {makeURL} from "../../utils/file-utils";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

import './App.css';


function App() {
  const cardsJSX = data.map(o => {
    const url = makeURL(`./assets/${o.coverImg}`, import.meta.url);
    return (
      <Card
        key={o.id}
        img={url.href}
        rating={o.stats.rating}
        reviewCount={o.stats.reviewCount}
        country={o.location}
        title={o.title}
        price={o.price}
      />
    );
  });

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="cards">
        {cardsJSX}
      </div>
    </div>
  )
}

export default App
