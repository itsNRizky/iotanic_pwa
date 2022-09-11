// import React, { useEffect, useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  return (
    <div className='h-screen bg-[#F5F6FA]'>
      <header className='pt-14 pb-2 px-8 bg-white w-screen '>
        <h1 className='text-3xl font-semibold'>Hi, {user.name}!</h1>
        <h2 className='text-base'>Selamat Datang di IOTANIC</h2>
      </header>
      <div className='mx-8 mt-4 flex items-center bg-white rounded-[62px] pl-4'>
        <img src='/img/search.png' alt='Searcch Icon'/>
        <input className='w-full px-4 sm:px-6 lg:px-14 py-4 sm:py-4 lg:py-6 rounded-r-[62px]' placeholder='Cari' />
      </div>
      <ScrollMenu wrapperClassName='my-6'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <div className='ml-8'></div>
      </ScrollMenu>
      <div className='bg-[#F9F9F9] h-full shadow-2xl'>
        <div className='flex justify-between items-center mx-8'>
          <h1 className='font-semibold text-2xl mt-2'>Topik terkini</h1>
          <Link className='p-4' to={''}>
            <div className='flex items-center'>
              <div className='w-[5px] h-[5px] ml-1 rounded-full bg-[#D9D9D9]'></div>
              <div className='w-[5px] h-[5px] ml-1 rounded-full bg-[#D9D9D9]'></div>
              <div className='w-[5px] h-[5px] ml-1 rounded-full bg-[#D9D9D9]'></div>
            </div>
          </Link>
        </div>
        <ScrollMenu wrapperClassName='mt-4'>
          <div className='flex flex-col justify-center items-center ml-8'>
            <div className='w-[80px] h-[80px] bg-[#F4F5F9] shadow-md rounded-[20px]'></div>
            <h2>Lorem</h2>
          </div>
          <div className='flex flex-col justify-center items-center ml-8'>
            <div className='w-[80px] h-[80px] bg-[#F4F5F9] shadow-md rounded-[20px]'></div>
            <h2>Lorem</h2>
          </div>
          <div className='flex flex-col justify-center items-center ml-8'>
            <div className='w-[80px] h-[80px] bg-[#F4F5F9] shadow-md rounded-[20px]'></div>
            <h2>Lorem</h2>
          </div>
          <div className='flex flex-col justify-center items-center ml-8'>
            <div className='w-[80px] h-[80px] bg-[#F4F5F9] shadow-md rounded-[20px]'></div>
            <h2>Lorem</h2>
          </div>
          <div className='flex flex-col justify-center items-center ml-8'>
            <div className='w-[80px] h-[80px] bg-[#F4F5F9] shadow-md rounded-[20px]'></div>
            <h2>Lorem</h2>
          </div>
          <div className='flex flex-col justify-center items-center ml-8'>
            <div className='w-[80px] h-[80px] bg-[#F4F5F9] shadow-md rounded-[20px]'></div>
            <h2>Lorem</h2>
          </div>
          <div className='ml-8'></div>
        </ScrollMenu>
      </div>
      <Navbar page={'dashboard'} />
    </div>
  )
}

export default Dashboard