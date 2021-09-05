const withAntdLess = require('next-plugin-antd-less')

const customENV = process.env.ENV_ARG
const subPath = '/nextjs-blank'
const variables = {
  development: {
    BASE_URL: '',
    API_URL: 'https://khoanguyenxuan.dev/pythagoras',
  },
  test: {
    BASE_URL: '',
    API_URL: 'https://khoanguyenxuan.dev/pythagoras',
  },
  live: {
    BASE_URL: '',
    API_URL: 'https://khoanguyenxuan.dev/pythagoras',
  },
}[customENV]

const nextConfig = {
  env: {
    ...variables,
    ENV_ARG: customENV,
    DEBUG: process.env.DEBUG && process.env.DEBUG === 'true',
  },
  distDir: 'build',
  // basePath: customENV !== 'development' ? subPath : '',
  // assetPrefix: customENV !== 'development' ? process.env.STATIC_URL : '',
  // generateBuildId: customENV,
  // poweredByHeader: false,
  // images: {
  //   domains: ['', ''],
  // },
}

module.exports = withAntdLess({
  // modifyVars: { '@primary-color': '#ee4d2d', '@link-color': 'red' },
  ...nextConfig,
})
