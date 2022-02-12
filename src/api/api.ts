import { Currency } from "../types/types";

const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';

export async function getCurrencies(): Promise<Currency[]> {
  const response = await fetch(BASE_URL);
  return response.json();
};