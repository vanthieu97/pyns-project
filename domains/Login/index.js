import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Typography, Form, Input, Button, Divider } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { LockOutlined, MobileOutlined } from '@ant-design/icons'
import { PHONE_REGEX } from 'shared/constants'

const { Title } = Typography
const { Item } = Form

const Login = () => {
  const [form] = useForm()

  const onClickSubmit = () => {
    form.validateFields().then((values) => console.log(values))
  }

  return (
    <>
      <Head>
        <title>Đăng nhập</title>
      </Head>
      <Title level={4} className="text-center">
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
        <Item name="password" required rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} label="Mật khẩu">
          <Input.Password placeholder="Nhập mật khẩu" prefix={<LockOutlined />} />
        </Item>
        <div className="text-center">
          <Button type="primary" onClick={onClickSubmit} className="mt-8">
            Đăng nhập
          </Button>
          <br />
          <Link href="/forgot">
            <a className="mt-8 d-inline-block">Quên mật khẩu?</a>
          </Link>
          <Divider />
          <Link href="/register">
            <Button type="primary" className="mt-8" size="large">
              Tạo tài khoản mới
            </Button>
          </Link>
        </div>
      </Form>
    </>
  )
}

export default Login
