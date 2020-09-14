import React, { useState, useRef } from 'react';
import ColoredBox from './ColoredBox';
import './App.css';

function App() {
  const [color, setColor] = useState([]);
  //const inputColorRef = useRef();

  function handleChangeColor(e) {
    //const hex = inputColorRef.current.value;
    setColor([]);
  }

  return (
    <div>
      <h1>React Random Color Generator</h1>
      <ColoredBox />
      {/*<input ref={inputColorRef} type="text"></input> */}
      <button onClick={handleChangeColor}>Change color!</button>
    </div>
  );
}

export default App;
