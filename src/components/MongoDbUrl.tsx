'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const MongoDbUrl = () => {
  const [urlString, setUrlString] = useState('');
  const [collection, setCollection] = useState('');
  function validateUrl(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (urlString && collection) {
      toast.success(`All's good`, {
        position: toast.POSITION.TOP_CENTER,
      });
      /*
      `mongodb+srv://Aleam_Hossain:aVai9CjHys8Mebam@cluster0.2qdagfg.mongodb.net`
      Upload Sheet API
      fetch('/api', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          urlString,
          collection,
        }),
      })
        .then(async (response) => {
          const value = await response.json();
          console.log(' MongoDbUrl.tsx:22 ~ response:', value);
        })
        .catch((error) => {
          console.error('Error', error);
        }); */
    } else if (!urlString) {
      toast.error('No MongoDB URL was Found!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error('No MongoDB URL was Found!');
    } else if (!collection) {
      toast.error('No Collection Name was Found!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error('No Collection Name was Found!');
    } else {
      return false;
    }
  }
  return (
    <form onSubmit={validateUrl}>
      <div className='flex flex-col gap-3 justify-start items-start '>
        <div className='flex w-full flex-col justify-start items-start'>
          <div className='w-full flex justify-between items-center  '>
            <label
              htmlFor='mongoUrl'
              className='text-lg leading-loose tracking-wide  '
            >
              MongoDB URL*
            </label>{' '}
          </div>

          <textarea
            name=''
            id='mongoUrl'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setUrlString(e.target.value);
            }}
            // required
            className='px-6 py-4 rounded-xl border border-[#E6E6E6] border-r-transparent w-full resize-none '
            cols={30}
            rows={10}
          />

          <p className='text-xs mt-2 text-[#737373]'>
            Please Add your MongoDB URL. <br /> This URL won&apos;t get stored
            anywhere. Upon Reload, your URL will get removed.
          </p>
        </div>
        <div className='flex w-full flex-col justify-start items-start'>
          <div className='w-full flex justify-between items-center  '>
            <label
              htmlFor='mongoUrl'
              className='text-lg leading-loose tracking-wide  '
            >
              Collection Name*
            </label>{' '}
          </div>

          <input
            type='text'
            name=''
            id='collection'
            // required
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCollection(e.target.value);
            }}
            className='px-6 py-4 rounded-xl border border-[#E6E6E6] border-r-transparent w-full resize-none '
          />

          <p className='text-xs mt-2 text-[#737373]'>
            Please Type your MongoDB Collection Name.
          </p>
        </div>
        <div className='w-full flex flex-row justify-end items-center'>
          <button
            type='submit'
            className='px-5 bg-[#23A6F0] rounded-xl flex justify-center items-center py-3 text-white text-lg '
          >
            Validate
          </button>
        </div>
      </div>
    </form>
  );
};

export default MongoDbUrl;

