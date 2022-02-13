import Head from 'next/head';
import {useState} from 'react';
import DropdownMenu from '../components/DropdownMenu';
import InputNumber from '../components/InputNumber';
import ResultCard from '../components/ResultCard';
import SubmitButton from '../components/SubmitButton';

export default function Home() {
  const [currency, setCurrency] = useState('');
  const [cost, setCost] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [freight, setFreight] = useState(0);
  const [showResult, setShowResult] = useState(false);
  // const [formValues, setFormValues] = useState({
  //   cost,
  //   insurance,
  //   freight,
  // });

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
      rate: 14344.75,
    },
  ];

  const countTax = () => {
    const exchangeRate = currencyList.find(
      (item) => item.value == currency
    ).rate;

    const convertedCost = cost * exchangeRate;
    const convertedInsurance = insurance * exchangeRate;
    const convertedFreight = freight * exchangeRate;

    const totalBuy = (
      convertedCost +
      convertedInsurance +
      convertedFreight
    ).toFixed(2);
    setShowResult(true);
  };

  return (
    <div className='w-screen min-h-screen bg-gray-200 flex items-center'>
      <Head>
        <title>Kalkulator Pajak Bea Cukai</title>
        <meta name='description' content='Generated by me hulihulihu' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {!showResult ? (
        <div className='w-1/2 mx-auto p-4 border-2 border-green-600 rounded-lg bg-white grid place-items-center'>
          {/* Form Title */}
          <h2 className='text-lg font-bold'>Kalkulator Bea Cukai</h2>

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
          </div>
        </div>
      ) : (
        <ResultCard />
      )}
    </div>
  );
}
