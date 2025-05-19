import React from 'react'
import data from '../database/config.json'
import logo from '../logo.svg'
import InnerLayer from './InnerLayer'

export default function Dashboard() {
    return (
        <div className='w-[90%] h-[90vh] bg-[red] rounded-lg shadow-lg'>
            <div className='p-4 flex flex-col md:flex-row md:justify-between'>
                <div className='flex items-center'>
                    <span dangerouslySetInnerHTML={{ __html: data.svgIcon.name }} className=''></span>
                    <h1 className='font-semibold text-3xl leading-10 text-[#4b5664]'>{data.Heading.name}</h1>
                </div>
                <div className='md:mt-4'>
                    <img src={logo} className='w-40 h-14' alt='Logo' />
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <InnerLayer />
            </div>
        </div>
    )
}
