import React, { useState } from 'react'
import '../styles/App.css'

function App() {
  const [equations, setEquations] = useState([])
  const [answer, setAnswer] = useState()

  const getEquation = val => {
    setEquations([...equations, val])
  }

  const getAnswer = () => {
    try {
      // eslint-disable-next-line
      setAnswer(eval(equations.join('')))
    } catch (e) {
      
      setAnswer('error: invalid input')
    }

    setEquations([])
  }

  const clearAll = () => {
    setEquations([])
    setAnswer([])
  }

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div className="output">
        {equations.map((equ, i) => (
          <small key={i}>{equ}</small>
        ))}
        <p>{answer}</p>
      </div>
      <div className="button-list">
        <button onClick={() => getEquation(1)}>1</button>
        <button onClick={() => getEquation(2)}>2</button>
        <button onClick={() => getEquation(3)}>3</button>
        <button onClick={() => getEquation('+')}>+</button>
        <button onClick={() => getEquation(4)}>4</button>
        <button onClick={() => getEquation(5)}>5</button>
        <button onClick={() => getEquation(6)}>6</button>
        <button onClick={() => getEquation('-')}>-</button>
        <button onClick={() => getEquation(7)}>7</button>
        <button onClick={() => getEquation(8)}>8</button>
        <button onClick={() => getEquation(9)}>9</button>
        <button onClick={() => getEquation('/')}>%</button>
        <button onClick={() => getEquation(0)}>0</button>
        <button onClick={clearAll}>CE</button>
        <button onClick={getAnswer}>=</button>
        <button onClick={() => getEquation('*')}>*</button>
      </div>
    </div>
  )
}

export default App
