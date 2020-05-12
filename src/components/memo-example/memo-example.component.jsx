import React, { useState, useMemo } from 'react'
import './memo-example.style.css'

const MemoExample = () => {
  const [inputFibonacci, setFibonacci] = useState(0)
  const [inputFactorial, setFactorial] = useState(0)

  const calculateFibonacci = (num) => {
    if (num <= 1) {
      return 1
    } else {
      return calculateFibonacci(num - 1) + calculateFibonacci(num - 2)
    }
  }

  const calculateFactorial = (num) => {
    if (num < 0) {
      return -1
    } else if (num === 0) {
      return 1
    } else {
      return num * calculateFactorial(num - 1)
    }
  }

  // const fibonacci = () => {
  //   console.log('fibonacci')
  //   return calculateFibonacci(inputFibonacci)
  // }

  const fibonacci = useMemo(() => {
    console.log('fibonacci')
    return calculateFibonacci(inputFibonacci)
  }, [inputFibonacci])

  // const factorial = () => {
  //   console.log('factorial')
  //   return calculateFactorial(inputFactorial)
  // }

  const factorial = useMemo(() => {
    console.log('factorial')
    return calculateFactorial(inputFactorial)
  }, [inputFactorial])

  return (
    <div className="memo-example-container">
      <div className="rectangle">
        <h1>
          Fibonacci de {inputFibonacci} é {fibonacci}
        </h1>
        <input type="number" onChange={(e) => setFibonacci(e.target.value)} />
      </div>
      <div className="rectangle">
        <h1>
          Fatorial de {inputFactorial} é {factorial}
        </h1>
        <input type="number" onChange={(e) => setFactorial(e.target.value)} />
      </div>
    </div>
  )
}

export { MemoExample }
