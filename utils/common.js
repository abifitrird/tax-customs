export const countTotalBuy = (
  currencyList,
  currency,
  cost,
  insurance,
  freight
) => {
  const exchangeRate = currencyList.find((item) => item.value == currency).rate;
  const totalBuy = ((cost + insurance + freight) * exchangeRate).toFixed(0);
  return totalBuy;
};

export const countImportDuty = (totalBuy) => {
  // import duty rate used is flat at 7.5%
  const importDuty = totalBuy * (7.5 / 100);
  return importDuty;
};

export const countExcises = (totalImport) => {
  // Total PDRI = (PPN + PPnBM + PPh 22)
  // PPN rate used is flat at 10%
  // PPnBM calculation is unavailable at the moment
  // PPh 22 rate used is flat at 10%
  const ppnCost = totalImport * (10 / 100);
  const ppnbmCost = 0;
  const pphCost = totalImport * (10 / 100);
  const excise = (ppnCost + ppnbmCost + pphCost).toFixed(0);
  return excise;
};
