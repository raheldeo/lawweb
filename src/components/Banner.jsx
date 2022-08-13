import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className=' w-full bg-blue-600 flex flex-col py-10 justify-center items-center'>
      <p className='text-2xl text-white font-medium font-bold '>
        Get insights & tools to help your nonprofit organization through
        COVID-19
      </p>
      <Link to='/contact'>
        <p className='text-sm uppercase font-medium text-white cursor-pointer hover:text-gray-200'>
          Visit our contact for any information.
        </p>
      </Link>
    </div>
  );
};

export default Banner;
