import React, { useState, useCallback } from 'react'

const functions = new Set()

const CallbackExample = () => {
  const [counter, setCounter] = useState(1)
  const [sum, setSum] = useState(0)

  // const incrementCounter = () => setCounter((counter) => counter + 1)
  const incrementCounter = useCallback(
    () => setCounter((counter) => counter + 1),
    []
  )
  // const incrementCounter = useCallback(
  //   () => setCounter((counter) => counter + 1),
  //   [counter]
  // )

  // const assignSum = () => setSum((sum) => sum + counter)
  // const assignSum = useCallback(() => setSum((sum) => sum + counter), [])
  const assignSum = useCallback(() => setSum((sum) => sum + counter), [counter])

  functions.add(incrementCounter)
  functions.add(assignSum)

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Soma: {sum} </h1>
      <div>
        <button onClick={incrementCounter}>Incrementar contador</button>
        <br />
        <button onClick={assignSum}>Atribuir soma</button>
      </div>
      <br />
      <h2> Funções: {functions.size} </h2>
    </div>
  )
}

export { CallbackExample }
