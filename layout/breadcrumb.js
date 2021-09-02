import React from 'react'
import { Breadcrumb } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'

const breadcrumbNameMap = {
  '/login': 'Đăng nhập',
  '/register': 'Đăng ký',
}

const MyBreadcrumb = () => {
  const router = useRouter()
  const pathSnippets = router.pathname.split('/').filter((i) => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <Link href={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    )
  })

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link href="/">Trang chủ</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems)

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
}

export default MyBreadcrumb
