import React, { useRef, createRef } from 'react'
import './ref-example.style.css'

const RefExample = () => {
  const inputRef = useRef([1, 2, 3])

  const handleClick = () => {
    debugger
    inputRef.current.focus()
  }

  return (
    <div className="ref-example-container">
      <input className="ref-example-input" ref={inputRef} type="text" />
      <button className="ref-example-button" onClick={handleClick}>
        Focar input
      </button>
    </div>
  )
}

export { RefExample }
