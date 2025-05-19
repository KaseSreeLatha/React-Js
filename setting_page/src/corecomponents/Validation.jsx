import React from 'react';
import data from '../data/config.json';

const Validation = () => {
    return (
        <div className='w-full mx-auto rounded-md bg-[#F8F8F8] p-4'>
            <div>
                <h1 className='w-full max-w-md h-5 font-medium text-sm text-black'>{data.SubHeading2.name}</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 pt-2'>
                {data.Validation.map((x, index) => {
                    return (
                        <div key={index} className='flex items-center'>
                            <span dangerouslySetInnerHTML={{ __html: data.TickIcon.Icon }} className='mr-2' />
                            <p>{x}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Validation;
