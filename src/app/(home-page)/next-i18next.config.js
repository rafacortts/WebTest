// next-i18next.config.js
module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'pt'],
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  };
  