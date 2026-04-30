import React from 'react';
import { FadeLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='flex justify-center items-center font-fold text-5xl text-teal-500 mt-10'>
      <FadeLoader color='#8CA9FF' ></FadeLoader>
    </div>
  );
};

export default loading;