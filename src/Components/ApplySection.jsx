import React from 'react';
import ApplyCard from './ApplyCard';
import { CardImage } from '../../utils';

const ApplySection = () => {
  return (
    <div className='px-5  pt-16 pb-24 lg:pt-24  lg:w-5/6 mx-auto relative lg:pointer-events-none h-full'>
      <div className='text-center flex flex-col gap-3'>
        <h2 className='hidden lg:block lg:text-6xl font-semibold text-gray-200'>Apply On Any Section Or Enable</h2>
        <h2 className=' hidden lg:block lg:text-6xl font-semibold text-gray-200'>For Whole Page</h2>
        <h2 className='visible lg:hidden text-[2.1rem] font-semibold text-gray-200 leading-[3rem]'>Apply On Any Section Or Enable For Whole Page</h2>
      </div>
      <div className='flex flex-col lg:flex-row mt-28 gap-10'>
        <div className='w-full h-full'>
          <ApplyCard />
        </div>
        <div className='lg:mt-20 w-full h-full'>
          <ApplyCard />
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
