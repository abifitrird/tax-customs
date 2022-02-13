import React from 'react';

const InputNumber = ({placeholder}) => {
  return (
    <>
      <input
        className='w-full outline-none p-2 border border-green-600 rounded'
        placeholder={placeholder}
        type='number'
      />
    </>
  );
};

export default InputNumber;
