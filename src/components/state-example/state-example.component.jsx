import React, { useState } from 'react'
import './state-example.style.css'

const StateExample = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="state-example">
      <h1>Contador: {count}</h1>
      <div className="buttons">
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>
    </div>
  )
}

export { StateExample }
