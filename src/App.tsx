import "./App.css";
import React, { useState } from "react";

export function CalculatorApp() {
  const [numberValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const HandleButtons = (value: string) => {
    setInputValue(numberValue + value);
  };

  const ClearButton = () => {
    setInputValue("");
  };
  //function
  const ClearDelBtn = () => {
    setInputValue(numberValue.slice(0, -1));
  };
  const HandleAddition = () => {
    setInputValue(numberValue + "+");
    setResult("");
  };
  const HandleSubtraction = () => {
    setInputValue(numberValue + "-");
    setResult("");
  };
  const HandleMultiplication = () => {
    setInputValue(numberValue + "*");
    setResult("");
  };
  const HandleDivision = () => {
    setInputValue(numberValue + "/");
    setResult("");
  };
  const handleButtonClick = () => {
    try {
      const addResult = eval(numberValue);
      setInputValue(addResult.toString());
    } catch (error) {
      setInputValue("Error");
    }
  };

  return (
    <div>
      <div className="container">
    <h1>calc</h1>
      <div className="content">
    <p>theme</p>
    <div className="new-div">
    <div className="circle"></div>

    </div>
   </div>
    </div>
      
      <input
          type="text"
          placeholder="enter a value"
          value={numberValue}
          readOnly
        />
      <div className="calculator">
        

        <div className="buttonClass">
          <button onClick={() => HandleButtons("7")}>7</button>
          <button onClick={() => HandleButtons("8")}>8</button>
          <button onClick={() => HandleButtons("9")}>9</button>
          <button style={{backgroundColor:'#2f3d55',color:'white' }} onClick={ClearDelBtn}>del</button>
          <button onClick={() => HandleButtons("4")}>4</button>
          <button onClick={() => HandleButtons("5")}>5</button>
          <button onClick={() => HandleButtons("6")}>6</button>
          <button onClick={HandleAddition}>+</button>
          <button onClick={() => HandleButtons("1")}>1</button>
          <button onClick={() => HandleButtons("2")}>2</button>
          <button onClick={() => HandleButtons("3")}>3</button>
          <button onClick={HandleSubtraction}>-</button>
          <button onClick={() => HandleButtons(".")}>.</button>
          <button onClick={() => HandleButtons("0")}>0</button>
          <button onClick={HandleDivision}>/</button>
          <button onClick={HandleMultiplication}>X</button>

          <button className="clearButton"  style={{ width: '250px',borderRadius: '10px', backgroundColor:'#2f3d55',color:'white' }} onClick={ClearButton}>RESET</button>
          <button className="equaltobtn" style={{ width: '200px',borderRadius: '10px',backgroundColor:'rgb(210, 84, 16)',color:'white' }} onClick={handleButtonClick}>=</button>
        </div>
      </div>
    </div>
  );
}
export default CalculatorApp;
// backgroundColor:' rgba(0, 88, 142, 0.863)