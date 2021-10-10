import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from 'redux/user'
import { HIDDEN_HEADER_PAGE, LOCAL_STORAGE_TOKEN } from 'shared/constants'

const MyHeader = dynamic(() => import('./header'))
const MyBreadcrumb = dynamic(() => import('./breadcrumb'))

const notCheckLoginMapping = ['/', '/login', '/register']

const MyLayout = ({ children }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { pathname } = router
  const token = useSelector((state) => state.user.token)
  const showHeader = !HIDDEN_HEADER_PAGE.includes(pathname)
  const [init, setInit] = useState(false)
  const [render, setRender] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)
    token && dispatch(setToken(token))
    setInit(true)
  }, [])

  useEffect(() => {
    if (!init) return
    if (token || notCheckLoginMapping.includes(pathname)) {
      return setRender(true)
    }
    // router.push(`/login?next=${encodeURIComponent(pathname)}`)
    router.push(`/login`)
  }, [init, token, pathname])

  return (
    render && (
      <Layout className="wrapper">
        {showHeader && <MyHeader />}
        <Layout.Content>
          {showHeader && <MyBreadcrumb />}
          <div className="pb-12">{children}</div>
        </Layout.Content>
      </Layout>
    )
  )
}

export default MyLayout
