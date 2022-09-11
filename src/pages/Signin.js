import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [incorrect, setIncorrect] = useState(false) 
  const signin = () => {
    fetch('https://iotanic-api.herokuapp.com/api/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((res) => {
        if (res.values.account === null){
          setIncorrect(true)
          return false
        }
        res.values.account.email = email
        sessionStorage.setItem('user', JSON.stringify(res.values.account))
        navigate('/Dashboard')
      })
  }
  return (
    <div className='flex flex-col items-center h-screen bg-white justify-center'>
      <img className='w-fit h-fit' src='/img/logo.png' alt='IoTanic' />
      <div className='flex flex-col w-4/5 md:w-2/3 lg:w-1/2'>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='block rounded-[62px] bg-[#F7F7F7] mb-5 px-7 py-4 shadow-md' placeholder='Email' type={'email'} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='block rounded-[62px] bg-[#F7F7F7] mb-5 px-7 py-4 shadow-md' placeholder='Password' type={'password'} />
        {incorrect? (<p className='text-red-600 text-center mb-2'>Email atau password yang anda masukkan salah, silakan coba lagi</p>) : false}
        <button onClick={signin} className='bg-[#002D3B] rounded-[62px] text-white mb-5 font-semibold px-7 py-4'>Masuk</button>
        <h2 className='text-center text-[#002D3B] font-semibold'>Lupa Password?</h2>
      </div>
      <p className='mt-[10%] text-sm text-[#002D3B]'>atau masuk dengan</p>
      <div className='flex justify-around w-4/5'>
        <div className='flex justify-center items-center shadow-md rounded-[62px] py-3 px-5'>
          <img src='/img/Facebook.png' alt='Facebook Signin' />
          <h2 className='font-semibold ml-3'>Masuk</h2>
        </div>
        <div className='flex justify-center items-center shadow-md rounded-[62px] py-3 px-5'>
          <img src='/img/Google.png' alt='Google Signin' />
          <h2 className='font-semibold ml-3'>Masuk</h2>
        </div>
      </div>
      <p className='text-gray-400 font-semibold mt-10'>Belum memiliki akun? <Link to={'/signup'} className='text-[#002D3B]'>Daftar</Link></p>
    </div>
  )
}

export default Signin