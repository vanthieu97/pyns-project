import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import store from 'redux/store'
import globalStyles from 'styles/global-styles'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

if (process.env.ENV_ARG === 'test' || process.env.ENV_ARG === 'uat') {
  console.log('Current tag: ' + process.env.TAG)
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="description" content="vanthieunguyen234@gmail.com" />
        <meta name="keywords" content="NextJS, ReactJS, JavaScript" />
        <link rel="icon" href={`${process.env.PUBLIC_URL}/images/favicon.ico`} />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

export default MyApp
