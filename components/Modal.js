import React from 'react'

const Modal = () => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button>X</button>
            <div className='title'>
                <h1>Are you sure you want to continue?</h1>
            </div>
            <div className='body'>
                <p></p>
            </div>
            <div className='footer'>
                <button>cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modal