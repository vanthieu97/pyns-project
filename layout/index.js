import React from 'react'
import dynamic from 'next/dynamic'
import { Layout } from 'antd'

const MyHeader = dynamic(() => import('./header'))
const MySidebar = dynamic(() => import('./sidebar'))
const MyBreadcrumb = dynamic(() => import('./breadcrumb'))
const MyFooter = dynamic(() => import('./footer'))

const MyLayout = ({ children }) => {
  return (
    <Layout className="wrapper">
      {/* <MySidebar /> */}
      <Layout>
        <MyHeader />
        <Layout.Content>
          <MyBreadcrumb />
          <div className="main-content">{children}</div>
        </Layout.Content>
        <MyFooter />
      </Layout>
    </Layout>
  )
}

export default MyLayout
