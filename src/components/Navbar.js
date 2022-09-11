import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({page}) => {
  return (
    <div className='bg-white fixed bottom-0 w-full h-[80px] flex items-center justify-center flex-col shadow-2xl'>
      {/* <div className='absolute bottom-10 border-8 border-[#F9F9F9] bg-[#002D3B] w-[80px] h-[80px] flex justify-center items-center rounded-full'><img src='img/iconsAdd.png' alt='Add' /></div> */}
      <div className='w-full flex justify-around items-center'>
        <Link className='p-2' to={'/Dashboard'}><img className='w-6 h-6' src={page === 'dashboard' ? '/img/iconsHomeActive.png' : '/img/iconsHome.png'} alt='Dashboard' /></Link>
        <Link className='p-2' to={'/Monitor'}><img className='w-6 h-6' src={page === 'monitor' ? '/img/iconsMonitorActive.png' : '/img/iconsMonitor.png'} alt='Monitor' /></Link>
        {/* <div></div> */}
        {/* <Link className='p-2' to={'/List'}><img src='/img/iconsList.png' alt='List' /></Link> */}
        <Link className='p-2' to={'/Profile'}><img className='w-6 h-6' src={page === 'profile' ? '/img/iconsProfileActive.png' : '/img/iconsProfile.png'} alt='Profile' /></Link>
      </div>
    </div>
  )
}

export default Navbar