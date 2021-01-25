import React, { useState } from 'react';
import './App.css';

function App() {
  const [ img, setImage ] = useState(false)
  const [ X, setX ] = useState(0)
  const [ Y, setY ] = useState(0)
  
  const handleUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  
  const getXY = (e) => {
    const Page = document.querySelector(".A4")
    setX(e.pageX - Page.offsetLeft)
    setY(e.pageY - Page.offsetTop)
  }

  return (
    <div className="App">
      <div className="XY">
      <div>
        X : {X}
        </div>
      <div>
        Y : {Y}
      </div>

      <div>
        <input type="file" onChange={handleUpload}/>  
      </div>
      </div>
      <div className="A4" onMouseMove={getXY}>
        {img && <img style={{ width: "100%" }} src={img} alt="ddsad"/>}
      </div> 
    </div>
  );
}

export default App;
