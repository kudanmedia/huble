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
      <input type="text" value={input} onChange={handleInputChange} />
      <div className="operator-buttons flex gap-x-4">
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => handleOperatorClick(op)} className="bg-blue-950 p-4">
            {op}
          </button>
        ))}
      </div>
      <div className="result">{result}</div>
      <button onClick={clearCalculator}>Clear</button>
    </div>
  );
};

export default Calculator;
