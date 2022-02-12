import React from 'react';
import './Currency.css';

type Props = {
  code: string;
  rate: number;
}

const Currency: React.FC<Props> = ({ code, rate }) => {
  return (
    <div className='currency'>
      <span className='currency__rate'>{rate}</span>
      <span className='currency__code'>- {code}</span>
    </div>
  );
};

export default Currency;