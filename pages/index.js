import Head from 'next/head';
import { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import InputNumber from '../components/InputNumber';
import ResultCard from '../components/ResultCard';
import SubmitButton from '../components/SubmitButton';
import { countExcises, countImportDuty, countTotalBuy } from '../utils/common';

export default function Home() {
  const [currency, setCurrency] = useState('');
  const [cost, setCost] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [freight, setFreight] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [totalBuy, setTotalBuy] = useState(0);
  const [importDuty, setImportDuty] = useState(0);
  const [excises, setExcises] = useState(0);

  const currencyList = [
    {
      name: 'Pilih mata uang',
      value: '',
      rate: 0,
    },
    {
      name: 'JPY',
      value: 'JPY',
      rate: 124.28,
    },
    {
      name: 'SGD',
      value: 'SGD',
      rate: 10646.25,
    },
    {
      name: 'USD',
      value: 'USD',
      rate: 14500,
    },
  ];

  const countTax = () => {
    const total = countTotalBuy(
      currencyList,
      currency,
      parseFloat(cost),
      parseFloat(insurance),
      parseFloat(freight)
    );
    const totalImportDuty = countImportDuty(total);
    const totalExcises = countExcises(
      parseFloat(total) + parseFloat(totalImportDuty)
    );
    setTotalBuy(total);
    setImportDuty(totalImportDuty);
    setExcises(totalExcises);
    setShowResult(true);
  };

  return (
    <div className='w-screen min-h-screen bg-white flex items-center'>
      <Head>
        <title>Kalkulator Pajak Bea Cukai</title>
        <meta name='description' content='Generated by me hulihulihu' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-2/3 min-h-screen mx-auto'>
        {/* Form Title */}
        <div className='p-4 grid place-items-center bg-purple-500 text-white'>
          <h2 className='text-lg text-center font-bold'>
            Kalkulator Bea Cukai
          </h2>
        </div>

        {/* Form Fields */}
        <div className='w-full grid grid-col-12 font-semibold gap-3'>
          <p className='col-span-12'>Harga Barang (Cost)</p>
          <div className='col-span-3'>
            <DropdownMenu
              data={currencyList}
              currentValue={currency}
              setValue={setCurrency}
            />
          </div>
          <div className='col-span-9'>
            <InputNumber
              placeholder='Nominal harga sesuai mata uang negara asal barang'
              setValue={setCost}
            />
          </div>

          <p className='col-span-12'>Biaya Asuransi (Insurance)</p>
          <div className='col-span-12'>
            <InputNumber
              placeholder='Biaya asuransi sesuai mata uang negara asal barang'
              setValue={setInsurance}
            />
          </div>

          <p className='col-span-12'>Ongkos Kirim (Freight)</p>
          <div className='col-span-12'>
            <InputNumber
              placeholder='Biaya pengiriman sesuai mata uang negara asal barang'
              setValue={setFreight}
            />
          </div>

          <div className='col-span-12'>
            <SubmitButton setValue={countTax} />
          </div>
          {showResult && (
            <div className='col-span-12'>
              <ResultCard
                totalBuy={totalBuy}
                importDuty={importDuty}
                excises={excises}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
