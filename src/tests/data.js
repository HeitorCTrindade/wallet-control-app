const expensesArray = [
  {
    id: 0,
    value: '3',
    description: 'Hot Dog',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {
      USD: {
        code: 'USD',
        name: 'Dólar Comercial',
        ask: '5.6208',
      },
      CAD: {
        code: 'CAD',
        name: 'Dólar Canadense',
        ask: '4.2313',
      },
      EUR: {
        code: 'EUR',
        name: 'Euro',
        ask: '6.6112',
      },
      GBP: {
        code: 'GBP',
        name: 'Libra Esterlina',
        ask: '7.2498',
      },
      ARS: {
        code: 'ARS',
        name: 'Peso Argentino',
        ask: '0.0729',
      },
      BTC: {
        code: 'BTC',
        name: 'Bitcoin',
        ask: '60299',
      },
      LTC: {
        code: 'LTC',
        name: 'Litecoin',
        ask: '261.69',
      },
      JPY: {
        code: 'JPY',
        name: 'Iene Japonês',
        ask: '0.05301',
      },
      CHF: {
        code: 'CHF',
        name: 'Franco Suíço',
        ask: '6.1297',
      },
      AUD: {
        code: 'AUD',
        name: 'Dólar Australiano',
        ask: '4.0124',
      },
      CNY: {
        code: 'CNY',
        name: 'Yuan Chinês',
        ask: '0.8278',
      },
      ILS: {
        code: 'ILS',
        name: 'Novo Shekel Israelense',
        ask: '1.6514',
      },
      ETH: {
        code: 'ETH',
        name: 'Ethereum',
        ask: '5184',
      },
      XRP: {
        code: 'XRP',
        name: 'Ripple',
        ask: '1.4',
      },
    },
  },
  {
    id: 1,
    value: '100',
    description: 'Games',
    currency: 'EUR',
    method: 'Dinheiro',
    tag: 'Lazer',
    exchangeRates: {
      USD: {
        code: 'USD',
        name: 'Dólar Comercial',
        ask: '5.6208',
      },
      CAD: {
        code: 'CAD',
        name: 'Dólar Canadense',
        ask: '4.2313',
      },
      EUR: {
        code: 'EUR',
        name: 'Euro',
        ask: '6.6112',
      },
      GBP: {
        code: 'GBP',
        name: 'Libra Esterlina',
        ask: '7.2498',
      },
      ARS: {
        code: 'ARS',
        name: 'Peso Argentino',
        ask: '0.0729',
      },
      BTC: {
        code: 'BTC',
        name: 'Bitcoin',
        ask: '60299',
      },
      LTC: {
        code: 'LTC',
        name: 'Litecoin',
        ask: '261.69',
      },
      JPY: {
        code: 'JPY',
        name: 'Iene Japonês',
        ask: '0.05301',
      },
      CHF: {
        code: 'CHF',
        name: 'Franco Suíço',
        ask: '6.1297',
      },
      AUD: {
        code: 'AUD',
        name: 'Dólar Australiano',
        ask: '4.0124',
      },
      CNY: {
        code: 'CNY',
        name: 'Yuan Chinês',
        ask: '0.8278',
      },
      ILS: {
        code: 'ILS',
        name: 'Novo Shekel Israelense',
        ask: '1.6514',
      },
      ETH: {
        code: 'ETH',
        name: 'Ethereum',
        ask: '5184',
      },
      XRP: {
        code: 'XRP',
        name: 'Ripple',
        ask: '1.4',
      },
    },
  },
];

const expectTotalExpense = (16.8624 + 661.12).toFixed(2);

const currenciesArray = [
  'USD',
  'CAD',
  'GBP',
  'ARS',
  'BTC',
  'LTC',
  'EUR',
  'JPY',
  'CHF',
  'AUD',
  'CNY',
  'ILS',
  'ETH',
  'XRP',
  'DOGE',
];

export { expensesArray, expectTotalExpense, currenciesArray };
