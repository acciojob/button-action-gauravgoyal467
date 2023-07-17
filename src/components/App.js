import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const[visible,setVisible]=useState(false);
  return (
    <div className="App" id="main">
      // Do not alter the main div
      <p id="para" className={visible ? "show":"hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={()=>setVisible(!visible)}>Click Me</button>
    </div>
  );
}

export default App
