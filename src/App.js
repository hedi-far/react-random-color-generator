import React, { useState } from 'react';
import './App.css';
const randomColor = require('randomcolor');

function App() {
  const [backgroundColor, setColor] = useState('#FFFFFF');

  const randomizedColor = randomColor();

  function handleChangeColor(e) {
    setColor(randomizedColor);
  }

  return (
    <div>
      <h1>React Random Color Generator</h1>
      <div id="box" style={{ backgroundColor: backgroundColor }}>
        <p>{backgroundColor}</p>
      </div>
      <button onClick={handleChangeColor}>Change color!</button>
    </div>
  );
}

export default App;
