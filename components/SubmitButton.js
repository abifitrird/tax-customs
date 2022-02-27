import React from 'react';

const SubmitButton = ({ setValue }) => {
  return (
    <>
      <button
        className='w-full outline-none rounded-lg p-3 bg-orange-500 text-white font-semibold hover:bg-orange-700'
        onClick={setValue}
      >
        Hitung Pajak
      </button>
    </>
  );
};

export default SubmitButton;
