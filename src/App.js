import react from 'react';
import './stylesheet.css';
import { useState } from 'react';




function App() {

  const [expression, setexpression] = useState('');

  function handleButtonClick(value) {
    if (expression === "Error") {
      // If the current expression is "Error," replace it with the new value
      setexpression(value.toString());
    } else {
      // Otherwise, append the new value to the expression
      setexpression(expression + value);
    }
  }

  function equals() {
    try {
      const result = eval(expression);
      if (isNaN(result)) {
        // Check if the result is NaN, which indicates an error
        setexpression('Error');
      } else {
        setexpression(result);
      }
    } catch (error) {
      // Handle any other errors that may occur during evaluation
      setexpression('Error');
    }
  }

  function erase() {
    setexpression('');
  }

  return (
    <div>
      <div className='backgroundimg'>
        <div className='calcbox'>
          <div>
            <button className='buttons' onClick={() => handleButtonClick(0)}>0</button>
            <button className='buttons' onClick={() => handleButtonClick(1)}>1</button>
            <button className='buttons' onClick={() => handleButtonClick(2)}>2</button>
            <button className='buttons' onClick={() => handleButtonClick('+')}>+</button>
            <button className='buttons' onClick={() => handleButtonClick(3)}>3</button>
            <button className='buttons' onClick={() => handleButtonClick(4)}>4</button>
            <button className='buttons' onClick={() => handleButtonClick(5)}>5</button>
            <button className='buttons' onClick={() => handleButtonClick('-')}>-</button>
            <button className='buttons' onClick={() => handleButtonClick(6)}>6</button>
            <button className='buttons' onClick={() => handleButtonClick(7)}>7</button>
            <button className='buttons' onClick={() => handleButtonClick(8)}>8</button>
            <button className='buttons' onClick={() => handleButtonClick('*')}>x</button>
            <button className='buttons' style={{ left: '110px' }} onClick={() => handleButtonClick(9)}>9</button>
            <button className='buttons' style={{ left: '230px' }} onClick={() => handleButtonClick('/')}>/</button>
            <button className='buttons' onClick={equals}>=</button>
            <button className='buttons' style={{ left: '-370px', top: '100px' }} onClick={erase}>CE</button>
          </div>
          <p className='inputtext'>{expression}</p>
        </div>
      </div>
    </div>
  )
}

export default App;

