import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  return (
    <div className='flex flex-col h-screen justify-between items-center bg-gradient-to-b from-[#F2FFF4] to-[#BBE6F3]'>
      <div></div>
      <div className='flex flex-col justify-center items-center'>
        <img className='w-[100px] h-[100px] bg-auto rounded-[20px]' src='/img/padi.png' alt='Profile' />
        <h2 className='font-semibold mt-4 text-2xl'>{user.name}</h2>
      </div>
      <div className='bg-white rounded-t-[56px] w-full px-14 py-14 mb-20'>
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center'>
            <img src='/img/qr.png' alt='Qr' />
            <h2 className='ml-3'>Akun Saya</h2>
          </div>
          <Link to={''}><img src='/img/arrowFront.png' alt='Next' /></Link>
        </div>
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center'>
            <img src='/img/qr.png' alt='Qr' />
            <h2 className='ml-3'>Hubungi Kami</h2>
          </div>
          <Link to={''}><img src='/img/arrowFront.png' alt='Next' /></Link>
        </div>
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center'>
            <img src='/img/qr.png' alt='Qr' />
            <h2 className='ml-3'>Tentang Kami</h2>
          </div>
          <Link to={''}><img src='/img/arrowFront.png' alt='Next' /></Link>
        </div>
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center'>
            <img src='/img/qr.png' alt='Qr' />
            <h2 className='ml-3'>Kebijakan Privasi</h2>
          </div>
          <Link to={''}><img src='/img/arrowFront.png' alt='Next' /></Link>
        </div>
        <Link to={'/Signin'}>
          <div className='bg-red-500 active:bg-red-800 m-auto sm:w-1/3 px-3 py-2 rounded-[20px]'>
            <p className='text-white text-center'>Keluar Akun</p>
          </div>
        </Link>
      </div>
      <Navbar page={'profile'}/>
    </div>
  )
}

export default Profile