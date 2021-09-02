import React from 'react'
import { Layout, Menu } from 'antd'
import { InfoCircleOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'

const MyHeader = () => {
  return (
    <Layout.Header className="top-header">
      {/* <div className="logo">
        <img src="/images/logo-2.png" width={50} height={50} alt="logo" />
      </div> */}
      <Menu className="top-menu" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Layout.Header>
  )
}

export default MyHeader
