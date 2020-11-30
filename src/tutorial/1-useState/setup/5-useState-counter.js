import React, { useState } from 'react'

const UseStateCounter = () => {
  const initialValue = 0
  const [value, setValue] = useState(initialValue)

  const resetValue = () => {
    setValue(initialValue)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          type='button'
          className='btn'
          onClick={() => setValue(value + 1)}
        >
          +
        </button>
        <button type='button' className='btn' onClick={resetValue}>
          reset
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => setValue(value - 1)}
        >
          -
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={complexIncrease}>
          +
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
