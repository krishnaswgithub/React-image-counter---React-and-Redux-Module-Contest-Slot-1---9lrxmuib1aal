import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const [width,setWidth] = useState(300);
  const [length,setLength] = useState(300);
  const changeArea =()=>{
    setWidth(width+2);
    setLength(length+2);
  }
  return (
    <div id="main">
      <img src={star} onClick={changeArea} height={`${length}px`} width={`${width}px`} />
    </div>
  )
}


export default App;
