import React from 'react'
import Flipcard from './flipcard'
import Button from './Button'
import Link from 'next/link'

const OurTeam = () => {
  return (
    <div className='h-auto md:py-10 md:pt-20 bg-[#AD8F31]'>
        <div className='grid grid-cols-12'>
          <div className='md:col-span-6 col-span-12 flex items-center justify-center px-10 md:px-0'>
            <div className='flex flex-col md:w-[400px] items-center justify-center md:h-[400px] bg-white shadow-xl p-5'>
              <div>
                <h1 className='text-5xl font-opensans font-semibold text-center'>Meet Our Team</h1>
              </div>
              <div>
              <div className="divider w-full my-2 bg-[#AD8F31] h-[1px]"></div>
              </div>
            </div>
          </div>
          <div className='md:col-span-6 col-span-12 flex items-center gap-3 justify-center mt-10'><Flipcard/></div>
        </div>
    </div>
  )
}

export default OurTeam