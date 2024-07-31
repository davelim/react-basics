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
        location={o.location}
        title={o.title}
        price={o.price}
        openSpots={o.openSpots}
      />
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
