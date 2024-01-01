import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [filled, setFilled] = useState(0);
  const [loading, setLoading] = useState("Loading...");
  const [color, setColor] = useState("black");

  useEffect(()=>{
    if(filled < 100){
      setTimeout(() => {setFilled(oldValue => oldValue + 1)}, 100);
    }

    if(filled === 50){
      setColor("white");
    }

    if(filled === 100){
      setLoading("Completed!");
    }
  }, [filled]);

  const onReload = ()=>{
    setFilled(0);
    setLoading("Loading...");
    setColor("black");
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <p className="progressText">Progress Bar</p>
        <div className="outerContainer">
          <div className="innerContainer" style={{width: filled + "%"}}></div>
          <p className="filled" style={{color: color}}>{filled}%</p>
        </div>
        <p className="status">{loading}</p>
        <div className="buttons">
          <button onClick={onReload}>Reload</button>
        </div>
      </div>
    </div>
  );
}

export default App;
