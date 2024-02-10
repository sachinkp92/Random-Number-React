import { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  let generateRandomNum = () => {
    let generateNum = Math.ceil(Math.random() * 100);
    setRandomNumber(generateNum);
  };
  return (
    <>
      <div className="bg-container">
        <div className="card-container">
          <h1>Ramdom Number</h1>
          <p>Generate random number between 1 to 100</p>
          <button className="button" onClick={generateRandomNum}>
            Generate
          </button>
          <h1 className="counter">{randomNumber}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
