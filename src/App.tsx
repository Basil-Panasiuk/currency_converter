import React, { useEffect, useState } from 'react';
import { getCurrencies } from './api/api';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';
import './App.css';

function App() {
  const [rates, setRates] = useState<{ [key: string]: number }>({});

  const loadСurrencies = async () => {
    const actualRates = await getCurrencies();

    setRates(actualRates.reduce((rates, currency) => ({
      ...rates,
      [currency.cc]: currency.rate,
    }), { 'UAH': 1 }));
  }

  useEffect(() => {
    loadСurrencies();
  }, []);

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <Header dollar={rates['USD']} euro={rates['EUR']} />
      <Converter rates={rates} />
    </div>
  );
}

export default App;
