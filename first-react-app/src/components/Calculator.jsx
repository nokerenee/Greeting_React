import React, { useState } from "react";
import '../App.css'; // Import App.css for the shared styles

function Calculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  const calculate = (op) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
      let calculatedResult;

      switch (op) {
        case "+":
          calculatedResult = num1 + num2;
          break;
        case "-":
          calculatedResult = num1 - num2;
          break;
        case "/":
          if (num2 !== 0) {
            calculatedResult = num1 / num2;
          } else {
            calculatedResult = "Division by zero!";
          }
          break;
        case "*":
          calculatedResult = num1 * num2;
          break;
        default:
          calculatedResult = "Invalid operator";
      }
      setResult(calculatedResult);
      setOperator(op);
    } else {
      setResult("Invalid input");
    }
  };

  const clearResult = () => {
    setInput1("");
    setInput2("");
    setResult("");
    setOperator("");
  };

  return (
    <div>
      <form className="calc componentBox">
        <label htmlFor="input1">Input 1:</label>
        <br />
        <input
          type="text"
          id="input1"
          name="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <br />
        <label htmlFor="input2">Input 2:</label>
        <br />
        <input
          type="text"
          id="input2"
          name="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <br />
        <label htmlFor="result">Result:</label>
        <br />
        <input type="text" id="result" name="result" value={result} readOnly />
        <br />
        <div className="button">
          <button type="button" onClick={() => calculate("+")}>
            +
          </button>
          <button type="button" onClick={() => calculate("-")}>
            -
          </button>
          <br />
          <button type="button" onClick={() => calculate("/")}>
            /
          </button>
          <button type="button" onClick={() => calculate("*")}>
            X
          </button>
        </div>
        <input type="reset" value="Reset" onClick={clearResult} />
      </form>
    </div>
  );
}

export default Calculator;
