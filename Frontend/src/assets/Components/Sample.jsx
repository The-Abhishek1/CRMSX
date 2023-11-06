import React, { useState } from "react";

function Sample() {
  const name = "Abhishek";
  const number = Math.ceil(Math.random() * 100000);
  const [num, setNo] = useState(number);
  const [inputs, setInputs] = useState({
    name: { name },
    no: { num },
  });
  const [dark, setDark] = useState(false);
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div style={theme}>
      <button onClick={() => setDark((prevDark) => !prevDark)}>Change</button>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id=""
            value={name}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="no">
          No:
          <input
            type="text"
            name="no"
            id=""
            value={num}
            onChange={handleInput}
            readOnly
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Sample;
