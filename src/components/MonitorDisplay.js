import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
const MonitorDisplay = ({device}) => {
  let name = device.name
  let id = device.id
  let records = device.records
  console.log(records)
  return (
    <>
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
          {/* MASIH ERROR DISINI */}
          <p>{name}</p> 
          <p>64%</p>
        </div>
        <div className='flex items-center justify-between px-8 border-b drop-shadow-md rounded-[20px] my-3'>
          <div className='flex items-center w-1/3'>
            <div className='w-6 h-6 bg-[#05784D] rounded-[3px] mr-2'></div>
            <p>Phosphor</p>
          </div>
          <p>50 g</p>
          <p>64%</p>
        </div>
        <div className='flex items-center justify-between px-8 border-b drop-shadow-md rounded-[20px] my-3'>
          <div className='flex items-center w-1/3'>
            <div className='w-6 h-6 bg-[#759AA2] rounded-[3px] mr-2'></div>
            <p>Kalium</p>
          </div>
          <p>70g</p>
          <p>30%</p>
        </div>
        <div className='flex items-center justify-between px-8 border-b drop-shadow-md rounded-[20px] my-3'>
          <div className='flex items-center w-1/3'>
            <div className='w-6 h-6 bg-[#8BBEAB] rounded-[3px] mr-2'></div>
            <p>pH</p>
          </div>
          <p>7.3 pH</p>
          <p>62%</p>
        </div>
      </div>
    </>
  )
}

export default MonitorDisplay