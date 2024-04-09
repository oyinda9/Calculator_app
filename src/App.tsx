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
      <h1>CALCULATOR</h1>
      <div className="calculator">
        <input
          type="text"
          placeholder="enter a value"
          value={numberValue}
          readOnly
        />

        <div className="buttonClass">
          <button onClick={ClearButton}>AC</button>
          <button onClick={HandleAddition}>+</button>
          <button onClick={HandleSubtraction}>-</button>
          <button onClick={HandleMultiplication}>*</button>
          <button onClick={HandleDivision}>/</button>
          <button onClick={ClearDelBtn}>del</button>
          <button onClick={() => HandleButtons("1")}>1</button>
          <button onClick={() => HandleButtons("2")}>2</button>
          <button onClick={() => HandleButtons("3")}>3</button>
          <button onClick={() => HandleButtons("4")}>4</button>
          <button onClick={() => HandleButtons("5")}>5</button>
          <button onClick={() => HandleButtons("6")}>6</button>
          <button onClick={() => HandleButtons("7")}>7</button>
          <button onClick={() => HandleButtons("8")}>8</button>
          <button onClick={() => HandleButtons("9")}>9</button>

          <button onClick={() => HandleButtons(".")}>.</button>
          <button onClick={handleButtonClick}>=</button>
        </div>
      </div>
    </div>
  );
}
export default CalculatorApp;
