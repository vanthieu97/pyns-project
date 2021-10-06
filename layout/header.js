import { UserOutlined } from '@ant-design/icons'
import { Layout, Menu, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser } from 'redux/user'
import { LOCAL_STORAGE_TOKEN } from 'shared/constants'

const MyHeader = () => {
  const dispatch = useDispatch()
  const { pathname } = useRouter()
  const token = useSelector((state) => state.user.token)

  const onClickLogout = () => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN, '')
    dispatch(resetUser())
  }

  return (
    <Layout.Header>
      <Link href="/">
        <a className="header-logo">
          <img src="/images/logo.png" width={52} height={29} alt="logo" />
        </a>
      </Link>
      <Menu mode="horizontal" selectedKeys={[pathname]} className="header-menu">
        <Menu.Item key="/">
          <Link href="/">Trang chủ</Link>
        </Menu.Item>
      </Menu>
      {token ? (
        <Menu mode="horizontal" selectedKeys={[]}>
          <Menu.SubMenu icon={<UserOutlined className="mr-0" />}>
            <Menu.Item key="/profile">
              <Link href="/profile">Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Item key="/package">
              <Link href="/package">Gói đang sở hữu</Link>
            </Menu.Item>
            <Menu.Item key="/history">
              <Link href="/history">Lịch sử xuất báo cáo</Link>
            </Menu.Item>
            <Menu.Item key="/logout" onClick={onClickLogout}>
              Đăng xuất
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      ) : (
        <Space className="auth-space" size="large">
          <Link href={`/login?next=${encodeURIComponent(pathname)}`}>
            <a>Đăng nhập</a>
          </Link>
          <Link href={`/register?next=${encodeURIComponent(pathname)}`}>
            <a>Đăng ký</a>
          </Link>
        </Space>
      )}
    </Layout.Header>
  )
}

export default MyHeader
