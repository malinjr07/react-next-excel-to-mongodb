'use client';

import Image from 'next/image';
import React from 'react';

const MongoDbUrl = () => {
  return (
    <form>
      <div className='flex flex-col gap-3 justify-start items-start '>
        <label
          htmlFor='mongoUrl'
          className='text-lg leading-loose tracking-wide  '
        >
          MongoDB URL
        </label>
        <div className='flex flex-row justify-center items-center w-[540px]  '>
          <input
            type='text'
            id='mongoUrl'
            className='px-6 py-4 rounded-xl border border-[#E6E6E6] border-r-transparent rounded-r-none w-5/6 '
          />
          <button
            type='button'
            className='w-1/6 bg-[#23A6F0] rounded-xl rounded-l-none flex justify-center items-center h-full p-[15px] text-white text-lg '
          >
            Validate
          </button>
        </div>
        <p className='text-xs text-[#737373]'>
          Please Upload your MongoDB URL. <br /> This URL won&apos;t get stored
          anywhere. Upon Reload, your URL will get removed.
        </p>
      </div>
    </form>
  );
};

export default MongoDbUrl;

