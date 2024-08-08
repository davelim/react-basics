
import {useState} from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggle() {
    setDarkMode(prev => !prev);
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggle}/>
      <Main darkMode={darkMode}/>
    </div>
  )
}

export default App
