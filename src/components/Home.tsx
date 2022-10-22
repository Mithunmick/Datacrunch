import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='min-h-screen bg-blue-100 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto bg-yellow-50'>
          <h1 className='font-mono text-gray-500 text-center text-5xl p-3'>
            Datacrunch
          </h1>
          <p className='text-green-600 text-center text-2xl p-2'>Welcome</p>
        </div>
        <button
          className='max-w-md w-full mx-auto p-5 bg-gray-500 text-red-500 text-bold'
          onClick={() => navigate('login')}
        >
          Click me to Start
        </button>
      </div>
    </>
  );
};

export default Home;
