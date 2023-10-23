import React from 'react'

const Button = () => {
  return (
    <button className='hero-btn md:w-auto text-sm md: flex items-center w-2/4'>
        <span className='capitalize'>Learn more</span>
        &nbsp;
        &nbsp;
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

        </span>
    </button>
  )
}

export default Button