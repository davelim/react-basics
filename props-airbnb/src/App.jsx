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
        <ContactCard
          img="../assets/mr-whiskerson.jpg"
          name="Mr. Whiskerson"
          phoneNumber="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"/>
        <ContactCard
          img="../assets/fluffykins.jpg"
          name="Fluffykins"
          phoneNumber="(212) 555-2345"
          email="fluff@me.com"/>
        <ContactCard
          img="../assets/felix.jpg"
          name="Felix"
          phoneNumber="(212) 555-4567"
          email="thecat@hotmail.com"/>
        <ContactCard
          img="../assets/pumpkin.png"
          name="Pumpkin"
          phoneNumber="(0800) CAT KING"
          email="pumpkin@scrimba.com"/>
      </div>
    </div>
  )
}

export default App
