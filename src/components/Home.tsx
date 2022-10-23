import React, { useState } from 'react';

const img1 = require('../images/Image1.jpg');
const img2 = require('../images/Image2.jpg');
const img3 = require('../images/Image3.jpg');
const img4 = require('../images/Image4.jpg');
const img5 = require('../images/Image5.jpg');
const img6 = require('../images/Image6.jpg');

const Home: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [submit, setSubmit] = useState(false);

  const Location = (val: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCurrentLocation(val.target.value);
  };
  console.log(submit);

  return (
    <>
      <div className='min-h-screen bg-blue-100 flex flex-col justify-center'>
        <h1 className='p-2 text-center text-3xl'>
          Please enter your current location
        </h1>
        {submit ? (
          <>
            <div className='text-center block  text-xl font-medium text-gray-900 dark:text-gray-500'>
              <h1>{currentLocation}</h1>
            </div>
            <div className='grid-template-rows: repeat(4, minmax(0, 1fr)) w-full'>
              <figure className='px-5 py-5'>
                <img src={img1} alt='img1' />
                <img src={img2} alt='img2' />
                <img src={img3} alt='img3' />
                <img src={img4} alt='img4' />
                <img src={img5} alt='img5' />
                <img src={img6} alt='img6' />
              </figure>
            </div>
          </>
        ) : null}
        {submit ? null : (
          <div className='flex justify-center'>
            <input
              className='block ax-w-md  mt-5 p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              type='text'
              onChange={Location}
            />
            <button
              className='max-w-md block mt-5 p-4 w-full items-center bg-gray-500 rounded-lg border hover:bg-blue-500 text-white font-bold py-2 px-4'
              onClick={() => setSubmit(true)}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
