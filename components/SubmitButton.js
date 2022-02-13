import React from 'react';

const SubmitButton = ({setValue}) => {
  return (
    <>
      <button
        className='w-full outline-none rounded-lg p-3 bg-blue-700 text-white font-semibold hover:bg-blue-800'
        onClick={setValue}
      >
        Hitung Pajak
      </button>
    </>
  );
};

export default SubmitButton;
