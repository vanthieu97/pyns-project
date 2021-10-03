import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const breadcrumbNameMap = {
  '/login': 'Đăng nhập',
  '/register': 'Đăng ký',
  '/profile': 'Thông tin cá nhân',
  '/package': 'Gói đã sở hữu',
  '/purchase': 'Mua gói',
  '/history': 'Lịch sử xuất báo cáo',
}

const MyBreadcrumb = () => {
  const router = useRouter()
  const pathSnippets = router.pathname.split('/').filter((i) => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    if (!breadcrumbNameMap[url]) return
    return (
      <Breadcrumb.Item key={url}>
        <Link href={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    )
  })
  const breadcrumbItems = extraBreadcrumbItems.length
    ? [
        <Breadcrumb.Item key="home">
          <Link href="/">Trang chủ</Link>
        </Breadcrumb.Item>,
      ].concat(extraBreadcrumbItems)
    : []

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
}

export default MyBreadcrumb
