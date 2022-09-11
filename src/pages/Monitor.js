import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const Monitor = () => {
  const [devices, setDevices] = useState([])
  const initialDevice = {name: 'Pilih alatt', records: [{n: 0, p: 0, k: 0, ph: 0}]}
  const [device, setDevice] = useState(initialDevice)
  const user = JSON.parse(sessionStorage.getItem('user'))
  useEffect(() => {
    fetch('https://iotanic-api.herokuapp.com/api/device', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({profile: user._id})
    })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((res) => {
        setDevice(initialDevice)
        setDevices(res.values.devices)
      })
  }, [])

  return (
    <div className='h-full bg-white w-full'>
      <nav className='flex justify-between items-center px-8 mt-6'>
        <Link to={'/dashboard'}><img src='/img/arrowBack.png' alt='back' /></Link>
        <div className='bg-[#CFE5DD] px-3 py-3 rounded-2xl'>
          <select className='text-[#2A442E] font-semibold text-base bg-transparent' onChange={(e) => {setDevice(devices.find((dvc) => dvc._id === e.target.value) || initialDevice)
          console.log(device.records[0])}}>
            <option>Pilih Alat</option>
            {
            devices.length === 0 ? (
              <option>Tidak ada alat</option>
            ) :
            devices.map((d) => (
              <option key={d._id} value={d._id}>{d.name}</option>
            ))}
          </select>
        </div>
      </nav>
      <div className='flex flex-col justify-center items-center mt-6'>
        <p className='text-base tracking-widest leading-tight'>NPK PH</p>
        <h1 className='font-semibold text-[32px] leading-tight'>Tanaman Anda</h1>
        <h1 className='font-semibold text-[32px] leading-tight'>Nampak <span className='text-[#08B74E]'>Baik</span> Hari ini!</h1>
      </div>
      <div className='relative flex flex-col justify-center items-center w-64 m-auto mt-6'>
        <CircularProgressbar styles={buildStyles({
          pathColor: `rgba(0, 45, 59, 1)`
        })} value={70} 
          
        />
        <div className='absolute flex flex-col justify-center items-center w-48'>
          <CircularProgressbar styles={buildStyles({
          pathColor: `rgba(5, 120, 77, 1)`
        })} value={50} />
          <div className='absolute flex flex-col justify-center items-center w-32'>
            <CircularProgressbar styles={buildStyles({
          pathColor: `rgba(117, 154, 162, 1)`
        })} value={25} />
            <div className='absolute w-20'> 
              <CircularProgressbar styles={buildStyles({
          pathColor: `rgba(139, 190, 171, 1)`
        })} value={10} />
            </div>
          </div>
        </div>
      </div>
      <div className='px-2 mt-6'>
        <div className='flex items-center justify-between px-8 border-b drop-shadow-md rounded-[20px] my-3'>
          <div className='flex items-center w-1/3'>
            <div className='w-6 h-6 bg-[#002D3B] rounded-[3px] mr-2'></div>
            <p>Nitrogen</p>
          </div>
          <p>{device.records[device.records.length - 1].n}g</p>
          <p>64%</p>
        </div>
        <div className='flex items-center justify-between px-8 border-b drop-shadow-md rounded-[20px] my-3'>
          <div className='flex items-center w-1/3'>
            <div className='w-6 h-6 bg-[#05784D] rounded-[3px] mr-2'></div>
            <p>Phosphor</p>
          </div>
          <p>{device.records[device.records.length - 1].p}g</p>
          <p>64%</p>
        </div>
        <div className='flex items-center justify-between px-8 border-b drop-shadow-md rounded-[20px] my-3'>
          <div className='flex items-center w-1/3'>
            <div className='w-6 h-6 bg-[#759AA2] rounded-[3px] mr-2'></div>
            <p>Kalium</p>
          </div>
          <p>{device.records[device.records.length - 1].k}g</p>
          <p>30%</p>
        </div>
        <div className='flex items-center justify-between px-8 border-b drop-shadow-md rounded-[20px] my-3'>
          <div className='flex items-center w-1/3'>
            <div className='w-6 h-6 bg-[#8BBEAB] rounded-[3px] mr-2'></div>
            <p>pH</p>
          </div>
          <p>{device.records[device.records.length - 1].ph}pH</p>
          <p>62%</p>
        </div>
      </div>
      <div className='flex justify-center items-center px-8 mt-8'>
        <Link to={'/monitor/add'} className='w-full'>
          <button className='w-full bg-[#05784D] text-white py-4 rounded-[20px] active:bg-[#002D3B]'>Tambah Alat</button>
        </Link>
      </div>
    </div>
  )
}

export default Monitor