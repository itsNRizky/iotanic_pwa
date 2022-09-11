import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [incorrect, setIncorrect] = useState(false)
  const [used, setUsed] = useState(false)
  const signup = () => {
    setIncorrect(false)
    setUsed(false)
    if (password !== passwordConfirm){
      setIncorrect(true)
      return false
    }
    fetch('https://iotanic-api.herokuapp.com/api/signup', {
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
        if (res.values.used){
          setUsed(true)
          return false
        }
        navigate('/Signin')
      })
  }
  return (
    <div className='flex flex-col items-center h-screen bg-white justify-between'>
      <div></div>
      <div className='flex flex-col items-center justify-center w-4/5 lg:w-1/2'>
        <img className='w-fit h-fit' src='/img/logo.png' alt='IoTanic' />
        <div className='flex flex-col w-[90%]'>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='block rounded-[62px] bg-[#F7F7F7] mb-5 px-7 py-4 shadow-md' placeholder='Email' type={'email'} />
          <input value={password} onChange={(e) => setPassowrd(e.target.value)} className='block rounded-[62px] bg-[#F7F7F7] mb-5 px-7 py-4 shadow-md' placeholder='Password' type={'password'} />
          <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} className='block rounded-[62px] bg-[#F7F7F7] mb-5 px-7 py-4 shadow-md' placeholder='Konfirmasi Password' type={'password'} />
          {incorrect? (<p className='text-red-500 text-center mb-2'>Password dan konfirmasi salah, mohon disamakan</p>) : false}
          {used? (<p className='text-red-500 text-center mb-2'>Email sudah digunakan, mohon gunakan email lain</p>) : false}
          <button onClick={signup} className='bg-[#002D3B] rounded-[62px] text-white font-semibold px-7 py-4'>Daftar</button>
        </div>
      </div>
      <h2 className='text-center text-gray-400 font-semibold mb-20'>Sudah memiliki akun? <Link to={'/signin'} className='text-[#002D3B]'>Masuk</Link></h2>
    </div>
  )
}

export default Signup