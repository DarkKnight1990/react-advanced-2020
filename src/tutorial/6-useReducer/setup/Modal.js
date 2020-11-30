import React, { useEffect } from 'react'

const Modal = ({ closeModal, modalContent }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 2000)
    return () => clearTimeout()
  })
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  )
}

export default Modal
