import { FormControl } from '@angular/forms';

enum CurrencyCodes {
  ADA = 'ADA',
  AED = 'AED',
  AFN = 'AFN',
  ALL = 'ALL',
  AMD = 'AMD',
  ANG = 'ANG',
  AOA = 'AOA',
  ARB = 'ARB',
  ARS = 'ARS',
  AUD = 'AUD',
  AVAX = 'AVAX',
  AWG = 'AWG',
  AZN = 'AZN',
  BAM = 'BAM',
  BBD = 'BBD',
  BDT = 'BDT',
  BGN = 'BGN',
  BHD = 'BHD',
  BIF = 'BIF',
  BMD = 'BMD',
  BNB = 'BNB',
  BND = 'BND',
  BOB = 'BOB',
  BRL = 'BRL',
  BSD = 'BSD',
  BTC = 'BTC',
  BTN = 'BTN',
  BWP = 'BWP',
  BYN = 'BYN',
  BYR = 'BYR',
  BZD = 'BZD',
  CAD = 'CAD',
  CDF = 'CDF',
  CHF = 'CHF',
  CLF = 'CLF',
  CLP = 'CLP',
  CNF = 'CNF',
  CNY = 'CNY',
  COP = 'COP',
  CRC = 'CRC',
  CUC = 'CUC',
  CUP = 'CUP',
  CVE = 'CVE',
  CZK = 'CZK',
  DAI = 'DAI',
  DJF = 'DJF',
  DKK = 'DKK',
  DOP = 'DOP',
  DOT = 'DOT',
  DZD = 'DZD',
  EGP = 'EGP',
  ERN = 'ERN',
  ETB = 'ETB',
  ETH = 'ETH',
  EUR = 'EUR',
  FJD = 'FJD',
  FKP = 'FKP',
  GBP = 'GBP',
  GEL = 'GEL',
  GGP = 'GGP',
  GHS = 'GHS',
  GIP = 'GIP',
  GMD = 'GMD',
  GNF = 'GNF',
  GTQ = 'GTQ',
  GYD = 'GYD',
  HKD = 'HKD',
  HNL = 'HNL',
  HRK = 'HRK',
  HTG = 'HTG',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  IMP = 'IMP',
  INR = 'INR',
  IQD = 'IQD',
  IRR = 'IRR',
  ISK = 'ISK',
  JEP = 'JEP',
  JMD = 'JMD',
  JOD = 'JOD',
  JPY = 'JPY',
  KES = 'KES',
  KGS = 'KGS',
  KHR = 'KHR',
  KMF = 'KMF',
  KPW = 'KPW',
  KRW = 'KRW',
  KWD = 'KWD',
  KYD = 'KYD',
  KZT = 'KZT',
  LAK = 'LAK',
  LBP = 'LBP',
  LKR = 'LKR',
  LRD = 'LRD',
  LSL = 'LSL',
  LTC = 'LTC',
  LTL = 'LTL',
  LVL = 'LVL',
  LYD = 'LYD',
  MAD = 'MAD',
  MATIC = 'MATIC',
  MDL = 'MDL',
  MGA = 'MGA',
  MKD = 'MKD',
  MMK = 'MMK',
  MNT = 'MNT',
  MOP = 'MOP',
  MRO = 'MRO',
  MRU = 'MRU',
  MUR = 'MUR',
  MVR = 'MVR',
  MWK = 'MWK',
  MXN = 'MXN',
  MYR = 'MYR',
  MZN = 'MZN',
  NAD = 'NAD',
  NGN = 'NGN',
  NIO = 'NIO',
  NOK = 'NOK',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  OP = 'OP',
  PAB = 'PAB',
  PEN = 'PEN',
  PGK = 'PGK',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  PYG = 'PYG',
  QAR = 'QAR',
  RON = 'RON',
  RSD = 'RSD',
  RUB = 'RUB',
  RWF = 'RWF',
  SAR = 'SAR',
  SBD = 'SBD',
  SCR = 'SCR',
  SDG = 'SDG',
  SEK = 'SEK',
  SGD = 'SGD',
  SHP = 'SHP',
  SLL = 'SLL',
  SOL = 'SOL',
  SOS = 'SOS',
  SRD = 'SRD',
  STD = 'STD',
  STN = 'STN',
  SVC = 'SVC',
  SYP = 'SYP',
  SZL = 'SZL',
  THB = 'THB',
  TJS = 'TJS',
  TMT = 'TMT',
  TND = 'TND',
  TOP = 'TOP',
  TRY = 'TRY',
  TTD = 'TTD',
  TWD = 'TWD',
  TZS = 'TZS',
  UAH = 'UAH',
  UGX = 'UGX',
  USD = 'USD',
  USDC = 'USDC',
  USDT = 'USDT',
  UYU = 'UYU',
  UZS = 'UZS',
  VEF = 'VEF',
  VES = 'VES',
  VND = 'VND',
  VUV = 'VUV',
  WST = 'WST',
  XAF = 'XAF',
  XAG = 'XAG',
  XAU = 'XAU',
  XCD = 'XCD',
  XDR = 'XDR',
  XOF = 'XOF',
  XPD = 'XPD',
  XPF = 'XPF',
  XPT = 'XPT',
  XRP = 'XRP',
  YER = 'YER',
  ZAR = 'ZAR',
  ZMK = 'ZMK',
  ZMW = 'ZMW',
  ZWL = 'ZWL',
}

export interface Currency {
  name: string;
  code: string;
}

export interface ServiceRespons1e {
  meta: {
    last_updated_at: '2024-08-20T23:59:59Z';
  };
  data: {
    [CurrencyCodes.ADA]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.AED]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.AFN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ALL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.AMD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ANG]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.AOA]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ARB]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ARS]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.AUD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.AVAX]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.AWG]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.AZN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BAM]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BBD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BDT]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BGN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BHD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BIF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BMD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BNB]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BND]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BOB]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BRL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BSD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BTC]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BTN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BWP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BYN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BYR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.BZD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CAD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CDF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CNF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CLF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CLP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CNY]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.COP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CRC]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CUC]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CUP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CVE]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.CZK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.DAI]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.DJF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.DKK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.DOP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.DOT]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.DZD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.EGP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ERN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ETB]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ETH]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.EUR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.FJD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.FKP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.GBP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.GEL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.GGP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.GHS]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.GIP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.GMD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.GNF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.GTQ]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.GYD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.HKD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.HNL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.HRK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.HTG]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.HUF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.IDR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ILS]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ILS]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.INR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.IQD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.IRR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ISK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.JEP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.JMD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.JOD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.JPY]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.KES]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.KGS]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.KHR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.KMF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.KPW]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.KRW]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.KWD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.KYD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.KZT]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.LAK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.LBP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.LKR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.LRD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.LSL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.LTC]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.LTL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.LVL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.LYD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MAD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MATIC]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MDL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MGA]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MKD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MMK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MNT]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MOP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MRO]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MRU]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MUR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MVR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MWK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MXN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MYR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MZN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.NAD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.NGN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.NIO]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.NOK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.NPR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.NZD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.OMR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.OP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.PAB]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.PEN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.PGK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.PHP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.PKR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.PLN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.PYG]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.QAR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.RON]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.RSD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.RUB]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.RWF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SAR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SBD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SCR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SDG]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SEK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SGD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SHP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SLL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SOL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SOS]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SRD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MVR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.STN]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SVC]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SYP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.SZL]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.THB]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.TJS]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.TMT]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.TND]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.MVR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.TRY]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.TTD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.TWD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.TZS]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.UAH]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.UGX]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.USD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.USDC]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.USDT]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.UYU]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.UZS]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.VEF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.VES]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.VND]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.VUV]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.WST]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XAF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XAG]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XAU]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XCD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XDR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XOF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XPD]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XPF]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XPT]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.XRP]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.YER]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ZAR]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ZMK]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ZMW]: {
      code: string;
      value: number;
    };
    [CurrencyCodes.ZWL]: {
      code: string;
      value: number;
    };
  };
}

export interface ServiceResponse {
  meta: {
    last_updated_at: '2024-08-20T23:59:59Z';
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
