import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Typography, Form, Input, Button, Divider, message } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { LockOutlined, MobileOutlined } from '@ant-design/icons'
import { LOCAL_STORAGE_TOKEN, PHONE_REGEX } from 'shared/constants'
import { useLoginMutation } from 'redux/pynsAPIs'
import { useRouter } from 'next/router'
import { getErrorMessage } from 'shared/utility'

const { Title } = Typography
const { Item } = Form

const Login = () => {
  const [form] = useForm()
  const router = useRouter()
  const [login, { data: loginData, error: loginError, isLoading: loginLoading }] = useLoginMutation()

  useEffect(() => {
    if (loginData) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN, loginData.token)
      message.success('Đăng nhập thành công.')
      const nextQuery = router.query.next
      if (nextQuery) {
        return router.push(decodeURIComponent(nextQuery))
      }
      return router.push('/')
    }
  }, [loginData])

  useEffect(() => {
    if (loginError) {
      message.error(getErrorMessage(loginError))
    }
  }, [loginError])

  const onClickSubmit = () => {
    form.validateFields().then((values) => {
      login(values)
    })
  }

  return (
    <>
      <Head>
        <title>Đăng nhập</title>
      </Head>
      <div className="mt-40">
        <Title level={2} className="text-center">
          PyNS
        </Title>
        <Form form={form} labelCol={{ span: 0, sm: { span: 5 } }} labelAlign="left" className="form-wrapper mt-12">
          <Item
            name="phone"
            required
            rules={[
              { required: true, message: 'Vui lòng nhập số điện thoại' },
              {
                validator(_, value) {
                  if (value && !PHONE_REGEX.test(value)) {
                    return Promise.reject('Số điện thoại không hợp lệ')
                  }
                  return Promise.resolve()
                },
              },
            ]}
            label="Số điện thoại"
          >
            <Input placeholder="Nhập số điện thoại" prefix={<MobileOutlined />} />
          </Item>
          <Item
            name="password"
            required
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
            label="Mật khẩu"
          >
            <Input.Password placeholder="Nhập mật khẩu" prefix={<LockOutlined />} />
          </Item>
          <div className="text-center">
            <Button type="primary" loading={loginLoading} onClick={onClickSubmit} className="mt-8">
              Đăng nhập
            </Button>
            <br />
            <Link href="/forgot">
              <a className="mt-8 d-inline-block">Quên mật khẩu?</a>
            </Link>
            <Divider />
            <Link href="/register">
              <Button type="primary" className="mt-8">
                Tạo tài khoản mới
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Login
