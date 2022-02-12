import React, { useEffect, useState } from 'react';
import CurrencyForm from '../CurrencyForm/CurrencyForm';
import './Converter.css'

type Props = {
  rates: { [key: string]: number };
};

const Converter: React.FC<Props> = ({ rates }) => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');

  useEffect(() => {
    if (Object.keys(rates).length) {
      handleChangeAmount1(1);
    }
  }, [rates]);

  const formatting = (num: number): number => {
    return +num.toFixed(2);
  };
  
  const handleChangeAmount1 = (amount1: number) => {
    setAmount1(amount1);
    
    setAmount2(formatting(amount1 * rates[currency1] / rates[currency2]));
  };
  
  const handleChangeCurrency1 = (currency1: string) => {
    setCurrency1(currency1);
    
    setAmount2(formatting(amount1 * rates[currency1] / rates[currency2]));
  };

  const handleChangeAmount2 = (amount2: number) => {
    setAmount2(amount2);
    
    setAmount1(formatting(amount2 * rates[currency2] / rates[currency1]));
  };

  const handleChangeCurrency2 = (currency2: string) => {
    setCurrency2(currency2);
    
    setAmount1(formatting(amount2 * rates[currency2] / rates[currency1]));
  };

  return (
    <div className="converter">
      <CurrencyForm
        onAmountChange={handleChangeAmount1}
        onCurrencyChange={handleChangeCurrency1}
        amount={amount1}
        currencies={Object.keys(rates)}
        currency={currency1}
      />
      <CurrencyForm 
        onAmountChange={handleChangeAmount2}
        onCurrencyChange={handleChangeCurrency2}
        amount={amount2}
        currencies={Object.keys(rates)}
        currency={currency2}
      />
    </div>
  );
};

export default Converter;