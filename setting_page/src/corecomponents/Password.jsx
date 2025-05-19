import React from 'react';
import data from '../data/config.json';
import Validation from './Validation';
import Button from './Button';

let Password = () => {
    return (
        <div className='w-full'>
            <div className='px-4'>
                <div className='w-full sm:w-64 h-8 text-lg leading-7 font-semibold text-[#101828]'>
                    <h2>{data.SubHeading1.name}</h2>
                </div>
                <div className='flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0'>
                    {data.Password.map((x, index) => (
                        <div key={index} className='flex flex-col gap-2 w-full sm:w-64 h-20 pt-2'>
                            <div className='font-medium'>
                                <label>{x}</label>
                            </div>
                            <div className='flex items-center w-full h-12  rounded-md bg-[#F9FAFB] border border-gray-300'>
                                <input
                                    className='rounded-md w-[80%] bg-[#F9FAFB] border-gray-300 pl-2'
                                    placeholder='*************'
                                />
                                <span
                                    dangerouslySetInnerHTML={{ __html: data.eyeClosed.close }}
                                    className='ml-2 w-4 h-6 cursor-pointer'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='pt-4 pb-4'>
                <Validation />
            </div>
            <div>
                <Button />
            </div>
        </div>
    );
};

export default Password;
