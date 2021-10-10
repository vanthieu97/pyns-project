import { LockOutlined, MobileOutlined } from '@ant-design/icons'
import { Button, Divider, Form, Input, message, Typography } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLoginMutation } from 'redux/pynsAPIs'
import { PHONE_REGEX } from 'shared/constants'
import { getErrorMessage } from 'shared/utility'

const { Title } = Typography
const { Item } = Form

const Login = () => {
  const [form] = useForm()
  const router = useRouter()
  const [login, { error: loginError, isLoading: loginLoading }] = useLoginMutation()
  const token = useSelector((state) => state.user.token)

  useEffect(() => {
    if (router.isReady && token) {
      message.success('Đăng nhập thành công')
      // router.push(router.query.next ?? '/')
      router.push('/')
    }
  }, [router.isReady, token])

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
        <Form form={form} labelCol={{ span: 5 }} labelAlign="left" className="form-wrapper mt-12">
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
            <Link href={router.query.next ? `/register?next=${encodeURIComponent(router.query.next)}` : '/register'}>
              <a>
                <Button type="primary" className="mt-8">
                  Tạo tài khoản mới
                </Button>
              </a>
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Login
