const customENV = process.env.ENV_ARG
const subPath = '/nextjs-blank'
const variables = {
  development: {
    BASE_URL: '',
    BASE_API_URL: ``,
  },
  test: {
    BASE_URL: '',
    BASE_API_URL: ``,
  },
  live: {
    BASE_URL: '',
    BASE_API_URL: ``,
  },
}[customENV]

module.exports = {
  env: {
    ...variables,
    ENV_ARG: customENV,
    TAG: process.env.TAG,
    LOCALE: process.env.LOCALE,
    DEBUG: process.env.DEBUG && process.env.DEBUG === 'true',
    PUBLIC_URL: customENV !== 'development' ? `${process.env.STATIC_URL}/public` : '',
  },
  basePath: customENV !== 'development' ? subPath : '',
  assetPrefix: customENV !== 'development' ? process.env.STATIC_URL : '',
  generateBuildId: async () => (customENV !== 'development' ? process.env.TAG : 'dev'),
  poweredByHeader: false,
  images: {
    domains: ['', ''],
  },
}
