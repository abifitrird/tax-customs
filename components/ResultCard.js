import React from 'react';

const ResultCard = ({ totalBuy, importDuty, excises }) => {
  return (
    <div>
      <div className='p-4 grid place-items-center bg-purple-500 text-white'>
        <h2 className='text-lg text-center font-bold'>
          Hasil Perhitungan Pajak
        </h2>
      </div>
      <table className='table-auto w-full'>
        <tbody>
          <tr className=''>
            <td className='p-2'>Total Biaya Barang</td>
            <td className='p-2 text-right'>{totalBuy}</td>
          </tr>
          <tr className=''>
            <td className='p-2'>Nilai Bea Masuk</td>
            <td className='p-2 text-right'>{importDuty}</td>
          </tr>
          <tr>
            <td className='p-2'>Nilai PDRI</td>
            <td className='p-2 text-right'>{excises}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultCard;
