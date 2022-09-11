import React from 'react'


const ArticleCard = () => {
  return (
    <div className="relative rounded-[20px] ml-8 bg-white bg-auto w-[340px] h-[246px]" style={{backgroundImage: `url('/img/padi.png')`}}>
      <div className='absolute bg-white w-full h-2/5 rounded-b-[20px] bottom-0 py-5 px-3'>
        <h2 className='font-semibold text-xl'>Cara Bertani yang Baik</h2>
        <p className='text-sm'>lorem ipsum sit dolor amit</p>
      </div>
    </div>
  )
}

export default ArticleCard