import { FormControl } from '@angular/forms';

export enum Money {
  crypto = 'crypto',
  currency = 'currency',
}

export enum SequenceNumber {
  first = 'first',
  second = 'second',
}

enum CurrencyCodes {
  ADA = 'ADA',
  AUD = 'AUD',
  BTC = 'BTC',
  BTN = 'BTN',
  CAD = 'CAD',
  CNY = 'CNY',
  DAI = 'DAI',
  DOT = 'DOT',
  ETH = 'ETH',
  EUR = 'EUR',
  GBP = 'GBP',
  IDR = 'IDR',
  KMF = 'KMF',
  MAD = 'MAD',
  NGN = 'NGN',
  RON = 'RON',
  RUB = 'RUB',
  THB = 'THB',
  USD = 'USD',
  XOF = 'XOF',
  XRP = 'XRP',
}

export interface Currency {
  name: string;
  code: string;
}

export interface ServiceResponse {
  meta: {
    last_updated_at: string;
  };
  data: {
    [key: string]: {
      code: string;
      value: number;
    };
  };
}

export interface FormGroupExchange {
  formGive: FormControl<number | null>;
  formGet: FormControl<number | null>;
}

export const nameCryptoArray: Array<Currency> = [
  { name: 'Криптовалюта', code: 'crypto' },
];

export const nameButtonCurrency: Array<Currency> = [
  { name: 'Рубли', code: 'RUB' },
  { name: 'Доллары', code: 'USD' },
  { name: 'Фунты', code: 'GBP' },
  { name: 'Евро', code: 'EUR' },
  { name: 'Юани', code: 'CNY' },
];

export const nameButtonRusBankList: Array<string> = [
  'alphaBank',
  'avangardBank',
  'discoveryBank',
  'gazpromBank',
  'homeBank',
  'mail',
  'ozonBank',
  'raiffaizenBank',
  'rosselkhozBank',
  'rusBank',
  'rusFinanceBank',
  'russiaBank',
  'rusStandardBank',
  'sovkomBank',
  'tochkaBank',
  'wb',
  'YouMoney',
];

export const nameButtonRusBankListRussian: Array<string> = [
  'Альфа Банк',
  'Авангард Банк',
  'Открытие',
  'Газпром Банк',
  'Хоум Банк',
  'Деньги',
  'Озон Банк',
  'Райффайзен Банк',
  'Россельхоз Банк',
  'РосБанк',
  'Русфинанс Банк',
  'Банк Россия',
  'Банк Русский Стандарт',
  'Совком Банк',
  'Точка Банк',
  'Wildberries',
  'YouMoney',
];

export const nameButtonCryptoList: Array<string> = [
  'Aidos',
  'Binance',
  'BitcoinSV',
  'Cosmos',
  'Dawn',
  'Decentraland',
  'Ethereum',
  'Insight',
  'Kusama',
  'Nebulas',
  'Polis',
  'Raydium',
  'Tether',
  'Wagerr',
];

export const nameButtonCryptoListCode: Array<string> = [
  CurrencyCodes.ADA,
  CurrencyCodes.BTC,
  CurrencyCodes.BTN,
  CurrencyCodes.AUD,
  CurrencyCodes.DAI,
  CurrencyCodes.MAD,
  CurrencyCodes.ETH,
  CurrencyCodes.IDR,
  CurrencyCodes.KMF,
  CurrencyCodes.NGN,
  CurrencyCodes.DOT,
  CurrencyCodes.RON,
  CurrencyCodes.THB,
  CurrencyCodes.XOF,
];
