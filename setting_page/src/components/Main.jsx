import React from 'react';
import data from '../data/config.json';
import Password from '../corecomponents/Password';

let Main = () => {
  return (
    <div className='h-screen w-full shadow-lg'>
      <div className='flex space-x-4 lg:space-x-1'>
        <span
          dangerouslySetInnerHTML={{ __html: data.SetIcon.Icon }}
          className='w-9 h-8 rounded-sm p-3'
        ></span>
        <h1 className='w-full  font-semibold text-3xl leading-10 text-[#254975] p-2 sm:pl-6'>
          {data.Heading.name}
        </h1>
      </div>
      <div className='pl-6'>
        <div className='w-full max-w-4xl rounded-sm shadow-lg border border-[#F2F2F2] p-4'>
          <Password />
          <div className='h-20'></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
