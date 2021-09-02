import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout, Menu } from 'antd'
import { DesktopOutlined, HomeOutlined, DashboardOutlined } from '@ant-design/icons'

const MySidebar = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [currentMenu, setCurrentMenu] = useState([])
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    setCurrentMenu([pathname])
  }, [pathname])

  const collapseMenuHandler = (status) => {
    setCollapsed(status)
  }

  const clickMenuHandler = (event) => {
    router.push(event.key)
  }

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={collapseMenuHandler}
      width={220}
      breakpoint="md"
      collapsedWidth={0}
      zeroWidthTriggerStyle={{
        top: 10,
        left: collapsed ? 10 : 228,
        borderRadius: 2,
        width: 42,
        transition: 'left 0.2s ease',
      }}
    >
      <div className="logo">
        <img src={collapsed ? `/images/logo-2.png` : `/images/logo.png`} width={50} height={50} alt="logo" />
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={currentMenu} onClick={clickMenuHandler}>
        <Menu.Item key="/" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="/about" icon={<DesktopOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="/history" icon={<DashboardOutlined />}>
          History
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default MySidebar
