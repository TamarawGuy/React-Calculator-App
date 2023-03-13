import { useState, useEffect } from "react";
import Button from "./Button";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("0");

  useEffect(() => {
    const handleEqualsKey = (e) => {
      const { key } = e;

      if (key === "Enter" || key === "=") {
        e.preventDefault();

        calculateResult(e.target.value);
      }
    };
    window.addEventListener("keydown", handleEqualsKey);

    return () => window.removeEventListener("keydown", handleEqualsKey);
  }, []);

  function calculateResult(input) {
    try {
      const result = Function("return " + input)(); //eslint-disable-line
      setOutput(result);
    } catch (error) {
      setOutput("Invalid Input");
    }
  }

  function handleButtonClick(label) {
    setInput((prevInput) => prevInput + label);
  }

  function clear() {
    setInput("");
    setOutput("0");
  }

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          className="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="text" className="input-field" value={output} readOnly />
      </div>

      <div className="btns">
        <Button label="1" onClick={() => handleButtonClick("1")} />
        <Button label="2" onClick={() => handleButtonClick("2")} />
        <Button label="3" onClick={() => handleButtonClick("3")} />
        <Button label="+" onClick={() => handleButtonClick("+")} />
        <Button label="4" onClick={() => handleButtonClick("4")} />
        <Button label="5" onClick={() => handleButtonClick("5")} />
        <Button label="6" onClick={() => handleButtonClick("6")} />
        <Button label="-" onClick={() => handleButtonClick("-")} />
        <Button label="7" onClick={() => handleButtonClick("7")} />
        <Button label="8" onClick={() => handleButtonClick("8")} />
        <Button label="9" onClick={() => handleButtonClick("9")} />
        <Button label="*" onClick={() => handleButtonClick("*")} />
        <Button label="C" onClick={() => clear()} />
        <Button label="0" onClick={() => handleButtonClick("0")} />
        <Button label="/" onClick={() => handleButtonClick("/")} />
        <Button label="=" onClick={() => calculateResult(input)} />
      </div>
    </div>
  );
}
