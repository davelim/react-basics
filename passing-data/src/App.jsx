import { useState } from 'react';
import boxesArr from "./boxes";

import Box from "./Box";

import './App.css'

function App(props) {
  const [boxes, setBoxes] = useState(boxesArr);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true
  });
  function handleChange(event) {
    const {name, value, type, checked} = event.target;
    setFormData(prev => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }
  // TODO: look up "ES6, computed properties" e.g. [event.target.name]


  function toggle(id) {
    setBoxes((prevBoxes) => {
      return prevBoxes.map(b =>
          b.id === id
            ? {...b, on: !b.on}
            : b
      );
    });
  }

  const boxesJSX = boxes.map(b => (
    <Box
      key={b.id}
      on={b.on}
      handleClick={() => toggle(b.id)}/>
  ));

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}

        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
          value={formData.comments}/>
        <input
          type="checkbox"
          id="isFriendly"
          name="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}/>
        <label htmlFor="isFriendly">Are you friendly?</label>

        <p>Hello {formData.firstName} {formData.lastName}! ({formData.email})</p>
        <p>{formData.comments}</p>
      </form>
      <h1>Boxes will go here</h1>
      {boxesJSX}
    </main>
  )
}

export default App