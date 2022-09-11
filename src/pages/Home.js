import React from 'react'
import TypeAnimation from 'react-type-animation';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-between bg-white'>
      <div className='h-1/5'></div>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <div className='border border-[#769BA3] rounded-[15px] px-5 py-1 mb-2'>
            <div></div>
            <h1 className='font-semibold text-3xl text-[#002D3B]'>IOTANIC</h1>
          </div>
          <TypeAnimation
            className='text-base'
            cursor={false}
            sequence={['Talk to Your Plants', 1000, 'Make Your Plants Happy :)']}
            wrapper="h2"
          />
        </div>
      </div>
      <div className='bg-[#91C4B1] h-52 w-[500px] sm:w-full rounded-t-[150px] flex justify-center items-center'>
        <Link to={'/signin'} className='bg-[#002D3B] rounded-[20px] w-2/3 p-3 text-center text-white'>
          Mulai
        </Link>
      </div>
    </div>
  )
}

export default Home