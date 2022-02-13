import React from 'react';

const ResultCard = () => {
  return (
    <div className='w-1/2 mx-auto border-2 border-green-600 rounded-lg bg-white'>
      <div className='p-4 grid place-items-center bg-green-600 text-white'>
        <p>Hasil Perhitungan Pajak</p>
      </div>
      <table className='table-auto w-full'>
        <tbody>
          <tr className='border border-2 border-b-gray-300'>
            <td className='p-2'>Total Biaya Barang</td>
            <td className='p-2 text-right'>0</td>
          </tr>
          <tr className='border border-2 border-b-gray-300'>
            <td className='p-2'>Nilai Bea Masuk</td>
            <td className='p-2 text-right'>0</td>
          </tr>
          <tr>
            <td className='p-2'>Nilai PDRI</td>
            <td className='p-2 text-right'>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultCard;
