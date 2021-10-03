const withAntdLess = require('next-plugin-antd-less')

const customENV = process.env.ENV_ARG || 'production'
const variables = {
  development: {
    BASE_URL: '',
    API_URL: 'https://khoanguyenxuan.dev/pythagoras',
    EXPORT_URL: 'https://khoanguyenxuan.dev/pythagoras/user/report',
  },
  test: {
    BASE_URL: '',
    API_URL: 'https://khoanguyenxuan.dev/pythagoras',
    EXPORT_URL: 'https://khoanguyenxuan.dev/pythagoras/user/report',
  },
  production: {
    BASE_URL: '',
    API_URL: 'https://khoanguyenxuan.dev/pythagoras',
    EXPORT_URL: 'https://khoanguyenxuan.dev/pythagoras/user/report',
  },
}[customENV]

const nextConfig = {
  env: {
    ...variables,
    ENV_ARG: customENV,
    DEBUG: process.env.DEBUG && process.env.DEBUG === 'true',
  },
  // distDir: 'build',
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
