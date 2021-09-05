import React from 'react'
import dynamic from 'next/dynamic'
import { Layout } from 'antd'
import { HIDDEN_HEADER_PAGE } from 'shared/constants'
import { useRouter } from 'next/router'

const MyHeader = dynamic(() => import('./header'))
const MyBreadcrumb = dynamic(() => import('./breadcrumb'))
const MyFooter = dynamic(() => import('./footer'))

const MyLayout = ({ children }) => {
  const { pathname } = useRouter()
  const showHeader = !HIDDEN_HEADER_PAGE.includes(pathname)

  return (
    <Layout className="wrapper">
      {showHeader && <MyHeader />}
      <Layout.Content>
        {showHeader && <MyBreadcrumb />}
        {children}
      </Layout.Content>
      {/* <MyFooter /> */}
    </Layout>
  )
}

export default MyLayout
