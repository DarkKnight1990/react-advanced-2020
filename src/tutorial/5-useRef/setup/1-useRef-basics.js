import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inpContainer = useRef(null)
  const divContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inpContainer.current.value)
    console.log(divContainer.current)
  }

  useEffect(() => {
    inpContainer.current.focus()
  })

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={inpContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  )
}

export default UseRefBasics
