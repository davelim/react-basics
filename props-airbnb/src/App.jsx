import {makeURL} from "../../utils/file-utils";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import './App.css';


function App() {
  const url = makeURL("./assets/katie.png", import.meta.url);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Card
        img={url.href}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
        />
    </div>
  )
}

export default App
