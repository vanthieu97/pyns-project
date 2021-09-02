import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Typography, Form, Input, Button, Divider, Radio, Select, DatePicker } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons'
import { DATE_FORMAT, PHONE_REGEX } from 'shared/constants'

const { Title } = Typography
const { Item } = Form

const Register = () => {
  const [form] = useForm()

  const onClickSubmit = () => {
    form.validateFields().then((values) => console.log(values))
  }

  return (
    <>
      <Head>
        <title>Đăng ký</title>
      </Head>
      <Title level={4} className="text-center">
        Đăng ký
      </Title>
      <Form form={form} labelCol={{ span: 0, sm: { span: 5 } }} labelAlign="left" className="form-wrapper mt-12">
        <Item name="type" required rules={[{ required: true, message: 'Vui lòng chọn loại' }]} label="Loại">
          <Radio.Group
            options={[
              { value: 'personal', label: 'Cá nhân' },
              { value: 'company', label: 'Công ty' },
            ]}
          />
        </Item>
        <Item name="name" required rules={[{ required: true, message: 'Vui lòng nhập tên' }]} label="Tên">
          <Input placeholder="Nhập tên" prefix={<UserOutlined />} />
        </Item>
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
        <Item name="gender" label="Giới tính" required rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}>
          <Select
            options={[
              { value: 'man', label: 'Nam' },
              { value: 'woman', label: 'Nữ' },
              { value: 'other', label: 'Khác' },
            ]}
            placeholder="Chọn giới tính"
          />
        </Item>
        <Item
          name="birthday"
          label="Ngày sinh"
          required
          rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
        >
          <DatePicker className="w-100" format={DATE_FORMAT} />
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

export default Register
