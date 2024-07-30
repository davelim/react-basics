import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ContactCard from "./components/ContactCard";

import './App.css';


function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Card />
      <div className="contacts">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  )
}

export default App
