import React from 'react'
import image from '../image.svg'
import data from '../database/config.json'
import Button from '../route/Button'
import Point from '../route/Point'

function InnerLayer() {
  return (
    <div className='w-[90%]'>
      <div className='h-[70vh] flex justify-between rounded-md bg-[#FFFFFF] border-[#F2F2F2] shadow-lg border p-4'>
        <div className=''>
          <h1 className='font-semibold text-2xl leading-7 text-[#101828]'>{data.Welcome.name}</h1>
          <p className='font-medium text-lg leading-6 text-[#101828]'>{data.info.data}</p>
          <Point />
          <Button />
        </div>
        <div>
          <img src={image} alt='pic' className='w-[80%]'></img>
        </div>
      </div>
    </div>
  )
}
export default InnerLayer
