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
    isFriendly: true,
    employment: "",
    favColor: ""
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
  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData);
    console.log(formData);
  }


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
      <form onSubmit={handleSubmit}>
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

        <fieldset>
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange} />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange} />
          <label htmlFor="part-time">Part-time</label>
          <br />
          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange} />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>
        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor">
          <option value="">--Choose--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br/>
        <button>Submit</button>
      </form>
      <p>Hello {formData.firstName} {formData.lastName}! ({formData.email})</p>
      <p>{formData.comments}</p>
      <p>{formData.employment}</p>
      <p>{formData.favColor}</p>
      <h1>Boxes will go here</h1>
      {boxesJSX}
    </main>
  )
}

export default App