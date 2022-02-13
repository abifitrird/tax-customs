import React from 'react';

const InputNumber = ({placeholder, setValue}) => {
  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        defaultValue={0}
        className='w-full outline-none p-2 border border-green-600 rounded'
        placeholder={placeholder}
        type='number'
      />
    </>
  );
};

export default InputNumber;
