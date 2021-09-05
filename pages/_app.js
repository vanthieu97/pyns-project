import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Provider } from 'react-redux'
import Head from 'next/head'
import store from 'redux/store'
import 'antd/dist/antd.less'
import globalStyles from 'styles/global-styles'

const Layout = dynamic(() => import('layout'))

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log('OKE')
  }, [])

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
        <link rel="icon" href={`/images/favicon.ico`} />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

export default MyApp
