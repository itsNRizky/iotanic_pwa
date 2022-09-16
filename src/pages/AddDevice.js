import React, { useState } from 'react'
import Navbar from './../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const AddDevice = () => {
  const [data, setData] = useState('')
  const [device, setDevice] = useState({available: false, deviceID: null})
  const navigate = useNavigate()
  const user = JSON.parse(sessionStorage.getItem('user'))
  const cek = () => {
    fetch('https://iotanic-api.herokuapp.com/api/device/check', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({device: data})
    })
      .catch((err) => console.info(err))
      .then((res) => res.json())
      .then((res) => {
        setDevice(res.values)
      })
  }

  const set = () => {
    fetch('https://iotanic-api.herokuapp.com/api/device/set', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({device: device.deviceID, name: data, profile: user._id})
    })
      .catch((err) => console.info(err))
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        navigate('/Monitor')
      })
  }
  return (
    <div className='h-screen bg-[#F5F6FA] flex flex-col'>
      <div className='flex justify-between items-center px-8 mt-6'>
        <Link to={'/monitor'}><img src='/img/arrowBack.png' alt='back' /></Link>
        <div className='bg-[#CFE5DD] px-3 py-3 rounded-2xl font-semibold text-[#2A442E] active:bg-[#002D3B] active:text-white'>
          Scan Barcode
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-3/4 m-auto pb-20'>
        <h2 className='font-semibold text-2xl text-center'>{device.available? 'Perangkat Dapat Digunakan!' : 'Tambahkan Sensor'}</h2>
        {device.available? <p className='text-[#05784D] text-center mb-9'>Silahkan masukan nama untuk perangkat</p> : (<p className='text-red-800 text-center mb-9'>Pastikan perangkat belum digunakan oleh orang lain!</p>)}
        <input type={'search'} className='w-full mb-6 px-4 sm:px-6 lg:px-14 py-4 sm:py-4 lg:py-6 rounded-[62px]' placeholder={device.available? 'Masukkan nama perangkat' : 'Kode ID Perangkat'} onChange={(e) => setData(e.target.value)} />
        <button className='w-full px-4 sm:px-6 lg:px-14 py-4 sm:py-4 lg:py-6 rounded-[62px] bg-[#002D3B] text-white font-semibold' onClick={device.available? set : cek}>{device.available? 'Tetapkan Nama Perangkat' : 'Cek Ketersediaan'}</button>
      </div>
      <Navbar />
    </div>
  )
}

export default AddDevice