'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';

const MongoDbUrl = () => {
  const [urlString, setUrlString] = useState('');
  async function validateUrl(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const urlArr = urlString.split('/');
    if (urlArr.length === 4) {
    } else {
      console.error('No Valid Mongo DB URL Found');
    }
  }
  return (
    <form onSubmit={validateUrl}>
      <div className='flex flex-col gap-3 justify-start items-start '>
        <div className='w-full flex justify-between items-center  '>
          <label
            htmlFor='mongoUrl'
            className='text-lg leading-loose tracking-wide  '
          >
            MongoDB URL
          </label>{' '}
          <button
            type='submit'
            className='px-5 bg-[#23A6F0] rounded-xl flex justify-center items-center py-3 text-white text-lg '
          >
            Validate
          </button>
        </div>

        <textarea
          name=''
          id='mongoUrl'
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setUrlString(e.target.value);
          }}
          className='px-6 py-4 rounded-xl border border-[#E6E6E6] border-r-transparent w-full resize-none '
          cols={30}
          rows={10}
        />

        <p className='text-xs text-[#737373]'>
          Please Upload your MongoDB URL. <br /> This URL won&apos;t get stored
          anywhere. Upon Reload, your URL will get removed.
        </p>
      </div>
    </form>
  );
};

export default MongoDbUrl;

