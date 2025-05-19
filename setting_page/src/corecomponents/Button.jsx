import React from 'react'
import data from '../data/config.json'
 
const Button = () => {
  return (
    <div className='lg:w-48 sm:w-fit  h-12 bg-[#3A73B7] rounded-lg py-3 px-6 flex justify-center items-center'>
        <h1 className='h-6 w-36 font-medium text-base text-white'>{data.Button.name}</h1>
    </div>
  )
}
export default Button