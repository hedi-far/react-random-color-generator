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
      <div
        id="box"
        style={{
          textSlign: 'center',
          boxSizing: 'border-box',
          borderStyle: 'dotted',
          height: '200px',
          backgroundColor: backgroundColor,
        }}
      >
        <h1>{backgroundColor}</h1>
      </div>
      <button onClick={handleChangeColor}>Change color!</button>
    </div>
  );
}

export default App;
