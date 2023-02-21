export const fetchExchangeRates = async () => {
  const response = await fetch("https://api.exchangerate.host/latest?base=RSD");

  return response.json();
};
