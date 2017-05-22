module.exports = [
  {
    test: /gmx\.[^.]{2,}/i,
    inbox: {
      name: 'GMX',
      url: 'https://www.gmx.net/',
    },
  },
  {
    test: /web\.[^.]{2,}/i,
    inbox: {
      name: 'WEB.de',
      url: 'https://web.de/',
    },
  },
  {
    test: /t-online\.[^.]{2,}/i,
    inbox: {
      name: 'T-Online',
      url: 'http://www.t-online.de/',
    },
  },
  {
    test: /(outlook\.[^.]{2,}|hotmail\.[^.]{2,}|live\.[^.]{2,})/i,
    inbox: {
      name: 'Hotmail / Outlook',
      url: 'https://www.live.com/?mkt=de-de',
    },
  },
  {
    test: /aol\.[^.]{2,}/i,
    inbox: {
      name: 'AOL',
      url: 'https://mail.aol.de/',
    },
  },
  {
    test: /freenet\.[^.]{2,}/i,
    inbox: {
      name: 'Freenet',
      url: 'https://www.freenet.de/',
    },
  },
  {
    test: /aol\.[^.]{2,}/i,
    inbox: {
      name: 'AOL',
      url: 'https://mail.aol.de/',
    },
  },
  {
    test: /(gmail\.[^.]{2,}|googlemail\.[^.]{2,})/i,
    inbox: {
      name: 'GMail',
      url: 'https://mail.google.com/',
    },
  },
  {
    test: /yahoo\.[^.]{2,}/i,
    inbox: {
      name: 'Yahoo',
      url: 'https://de.yahoo.com/',
    },
  },
  {
    test: /firemail\.[^.]{2,}/i,
    inbox: {
      name: 'Firemail',
      url: 'http://firemail.de/',
    },
  },
  {
    test: /1und1\.[^.]{2,}/i,
    inbox: {
      name: '1&1',
      url: 'https://account.1und1.de/',
    },
  },
  {
    test: /arcor\.[^.]{2,}/i,
    inbox: {
      name: 'Arcor',
      url: 'https://www.arcor.de',
    },
  },
  {
    test: /(icloud\.[^.]{2,}|me\.[^.]{2,})/i,
    inbox: {
      name: 'iCloud',
      url: 'https://www.icloud.com/',
    },
  },
  {
    test: /mail\.[^.]{2,}/i,
    inbox: {
      name: 'MAIL.de',
      url: 'https://mail.de',
    },
  },
];
