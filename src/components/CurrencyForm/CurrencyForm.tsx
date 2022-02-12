import React from 'react';
import './CurrencyForm.css';

type Props = {
  amount: number;
  currency: string;
  currencies: string[];
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
}

const CurrencyForm: React.FC<Props> = ({ 
  amount, 
  currency, 
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rgx = /^[0-9]*\.?[0-9]*$/;
    const newValue = e.target.value.match(rgx);
    if (newValue) {
      onAmountChange(+newValue);
    }
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCurrencyChange(e.target.value);
  };

  return (
    <div className="form">
      <input 
        className="form__input"
        value={amount}
        onChange={handleChangeInput}
        type="text" 
      />
      <select 
        className="form__select"
        value={currency}
        onChange={handleChangeSelect}
      >
        {currencies.map(currency => (
          <option 
            key={currency}
            value={currency}
          >
            {currency}
          </option>
        ))}
        </select>
    </div>
  );
};

export default CurrencyForm;