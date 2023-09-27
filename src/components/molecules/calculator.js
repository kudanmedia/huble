import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState(''); // Input field value
  const [result, setResult] = useState(0); // Result of the operation
  const [operator, setOperator] = useState(null); // Selected operator
  const [prevInput, setPrevInput] = useState(''); // Previous input

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
    if (operator && prevInput !== '') {
      calculateResult(prevInput, newValue, operator);
    }
  };

  // Function to handle operator button clicks
  const handleOperatorClick = (selectedOperator) => {
    if (input !== '') {
      if (operator && prevInput !== '') {
        // If an operator is already selected and previous input exists, perform the previous operation
        calculateResult(prevInput, input, operator);
        setPrevInput(result.toString());
      } else {
        // If no operator is selected, set the current input as the previous input
        setPrevInput(input);
      }

      // Clear the input field and set the new operator
      setInput('');
      setOperator(selectedOperator);
    }
  };

  // Function to calculate the result
  const calculateResult = (prev, current, op) => {
    const prevInputValue = parseFloat(prev);
    const inputValue = parseFloat(current);
    if (!isNaN(prevInputValue) && !isNaN(inputValue)) {
      switch (op) {
        case '+':
          setResult(prevInputValue + inputValue);
          break;
        case '-':
          setResult(prevInputValue - inputValue);
          break;
        case '*':
          setResult(prevInputValue * inputValue);
          break;
        case '/':
          if (inputValue !== 0) {
            setResult(prevInputValue / inputValue);
          } else {
            alert("Division by zero is not allowed.");
            clearCalculator();
          }
          break;
        default:
          break;
      }
    }
  };

  // Function to clear the calculator
  const clearCalculator = () => {
    setInput('');
    setResult(0);
    setOperator(null);
    setPrevInput('');
  };

  return (
    <div className="calculator">
      <div className="bg-blue-950 h-10 w-full"></div>
      <div className="p-20">
      <div className="border-2 border-blue-950 p-10 my-8 place-content-center rounded-lg text-center">
      <input type="text" value={input} onChange={handleInputChange} className="border-blue-950 border-2 p-4"/>
      <div className="operator-buttons flex gap-x-4 justify-center my-4">
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => handleOperatorClick(op)} className="bg-blue-950 text-white align-middle p-5 text-center">
            {op}
          </button>
        ))}
      </div>
      </div>  
      <div className="border-2 border-blue-950 p-10 my-10 place-content-center rounded-lg text-center text-lg text-blue-950 font-bold">
      <div className="input">{input ? input : prevInput ? prevInput : 0}</div>
      <div className="result">Result: {result}</div>
      <button onClick={clearCalculator}>Clear</button>
      </div>      

    </div>
    </div>
  );
};

export default Calculator;
