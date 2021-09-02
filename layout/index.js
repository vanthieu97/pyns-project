import React from 'react'
import dynamic from 'next/dynamic'
import { Layout } from 'antd'

const MyHeader = dynamic(() => import('./header'))
const MyBreadcrumb = dynamic(() => import('./breadcrumb'))
const MyFooter = dynamic(() => import('./footer'))

const MyLayout = ({ children }) => {
  return (
    <Layout className="wrapper">
      <Layout>
        <MyHeader />
        <Layout.Content>
          <MyBreadcrumb />
          <div className="main-content">{children}</div>
        </Layout.Content>
        {/* <MyFooter /> */}
      </Layout>
    </Layout>
  )
}

export default MyLayout
