import React, { useState } from 'react'
import { Layout, Menu, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { LOCAL_STORAGE_TOKEN } from 'shared/constants'
import { useRouter } from 'next/router'
import { route } from 'next/dist/server/router'

const MyHeader = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false)
  if (typeof window !== 'undefined') {
    let login = !!localStorage.getItem(LOCAL_STORAGE_TOKEN)
    login !== isLogin && setIsLogin(login)
  }

  return (
    <Layout.Header>
      <Menu mode="horizontal">
        <Menu.Item key="/">
          <Link href="/">Trang chủ</Link>
        </Menu.Item>
      </Menu>
      {isLogin ? (
        <Menu mode="horizontal">
          <Menu.SubMenu icon={<UserOutlined />}>
            <Menu.Item key="/profile">
              <Link href="/profile">Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Item key="/package">
              <Link href="/package">Gói đang sở hữu</Link>
            </Menu.Item>
            <Menu.Item key="/history">
              <Link href="/history">Lịch sử</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      ) : (
        <Space size="large">
          <Link href={`/login?next=${encodeURIComponent(router.pathname)}`}>
            <a>Đăng nhập</a>
          </Link>
          <Link href={`/register?next=${encodeURIComponent(router.pathname)}`}>
            <a>Đăng ký</a>
          </Link>
        </Space>
      )}
    </Layout.Header>
  )
}

export default MyHeader
