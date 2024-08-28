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

export const nameButtonCryptoList: Array<Currency> = [
  { name: 'Aidos', code: CurrencyCodes.ADA },
  { name: 'Binance', code: CurrencyCodes.BTN },
  { name: 'BitcoinSV', code: CurrencyCodes.BTC },
  { name: 'Cosmos', code: CurrencyCodes.AUD },
  { name: 'Dawn', code: CurrencyCodes.DAI },
  { name: 'Decentraland', code: CurrencyCodes.MAD },
  { name: 'Ethereum', code: CurrencyCodes.ETH },
  { name: 'Insight', code: CurrencyCodes.IDR },
  { name: 'Kambria', code: CurrencyCodes.CAD },
  { name: 'Kusama', code: CurrencyCodes.KMF },
  { name: 'Nebulas', code: CurrencyCodes.NGN },
  { name: 'Polis', code: CurrencyCodes.DOT },
  { name: 'Raydium', code: CurrencyCodes.RON },
  { name: 'Tether', code: CurrencyCodes.THB },
  { name: 'Wagerr', code: CurrencyCodes.XOF },
  { name: 'Xensor', code: CurrencyCodes.XRP },
];
