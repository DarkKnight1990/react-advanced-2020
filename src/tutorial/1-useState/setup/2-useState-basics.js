import React, { useState } from 'react'
// use
// component name must be uppercase
// hooks must be inside the function/component body
// cannot be called conditionally

const UseStateBasics = () => {
  const [text, setText] = useState('random title')

  const clickHandler = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={clickHandler}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
