import {useState, useEffect} from "react";

import Joke from "./components/Joke";
import {makeURL} from "../../utils/file-utils";
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);
  const url = makeURL("./data/jokes.json", import.meta.url);

  useEffect(() => {
    fetch(url.href)
      .then(resp => {
        if (resp.ok)
          return resp.json();
        return [];
      })
      .then(data => {
        console.log(data);
        setJokes(data);
      });
    }, []);

  const jokesJSX = jokes.map((o, idx) => {
    return (
      <Joke
        key={idx}
        setup={o.setup}
        punchline={o.punchline}
      />
    )
  });
  
  return (
    <>
      {jokesJSX}
    </>
  )
}

export default App
