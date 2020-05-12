import React, { useState, useEffect } from 'react'
import './effect-example.style.css'
import axios from 'axios'

const BREEDS = {
  BEAGLE: 'beagle',
  PUG: 'pug',
}

const EffectExample = () => {
  const [dogs, setDogs] = useState([])
  const [breed, setBreed] = useState('')

  useEffect(() => {
    const loadRandomDogs = async () => {
      const result = await axios.get(
        'https://dog.ceo/api/breeds/image/random/5'
      )
      if (result) {
        setDogs(result.data.message)
      }
    }
    loadRandomDogs()

    return () => console.log('return')
  }, [])

  useEffect(() => {
    console.log('effect')
    if (breed) {
      const changeDogs = async () => {
        const result = await axios.get(
          `https://dog.ceo/api/breed/${breed}/images/random/5`
        )

        if (result) {
          setDogs(result.data.message)
        }
      }

      changeDogs()
    }

    return () => console.log('return')
  }, [breed])

  const renderDogs = () => {
    return dogs.map((dog, key) => {
      return (
        <div className="card" key={key}>
          <img alt="" src={dog}></img>
        </div>
      )
    })
  }

  return (
    <div className="effect-example">
      <h1>Doguinhos Aleatórios</h1>
      <div className="dogs">{renderDogs()}</div>
      <div className="buttons">
        <button onClick={() => setBreed(BREEDS.BEAGLE)}>BEAGLES!!!</button>
        <button onClick={() => setBreed(BREEDS.PUG)}>PUGS!!!</button>
      </div>
    </div>
  )
}

export { EffectExample }
