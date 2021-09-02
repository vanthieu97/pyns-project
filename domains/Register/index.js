import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Typography, Form, Input, Button, Divider, Radio, Select, DatePicker } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons'
import { DATE_FORMAT, PHONE_REGEX } from 'shared/constants'
import { PROVINCES } from 'shared/provinces'

const { Title } = Typography
const { Item } = Form

const Register = () => {
  const [form] = useForm()

  const onClickSubmit = () => {
    form.validateFields().then((values) => console.log(values))
  }

  console.log(PROVINCES)
  return (
    <>
      <Head>
        <title>Đăng ký</title>
      </Head>
      <Title level={2} className="text-center">
        Đăng ký
      </Title>
      <Form form={form} labelCol={{ span: 0, sm: { span: 6 } }} labelAlign="left" className="form-wrapper mt-12">
        <Item name="type" required rules={[{ required: true, message: 'Vui lòng chọn loại' }]} label="Loại">
          <Radio.Group
            options={[
              { value: 'personal', label: 'Cá nhân' },
              { value: 'company', label: 'Công ty' },
            ]}
          />
        </Item>
        <Item name="name" required rules={[{ required: true, message: 'Vui lòng nhập tên' }]} label="Tên">
          <Input placeholder="Nhập tên" />
        </Item>
        <Item
          name="email"
          label="Email"
          required
          rules={[
            { required: true, message: 'Vui lòng nhập email' },
            { type: 'email', message: 'Vui lòng nhập email hợp lệ' },
          ]}
        >
          <Input placeholder="Nhập email" />
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
          <Input placeholder="Nhập số điện thoại" />
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
          <DatePicker className="w-100" format={DATE_FORMAT} placeholder="Chọn ngày sinh" />
        </Item>
        <Item
          name="province"
          label="Tỉnh/Thành phố"
          required
          rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành phố' }]}
        >
          <Select options={PROVINCES} placeholder="Chọn tỉnh/thành phố" />
        </Item>
        <Item
          name="district"
          label="Quận/Huyện"
          required
          rules={[{ required: true, message: 'Vui lòng chọn quận/huyện' }]}
        >
          <Select options={PROVINCES} placeholder="Chọn quận/huyện" />
        </Item>
        <Item name="address" label="Địa chỉ">
          <Input placeholder="Nhập địa chỉ" />
        </Item>
        <div className="text-center">
          <Button type="primary" onClick={onClickSubmit} className="mt-8" size="large">
            Đăng ký
          </Button>
          <br />
          <Divider className="my-16" />
          <span>
            Đã có tài khoản?
            <Link href="/login">
              <a> Đăng nhập ngay</a>
            </Link>
          </span>
        </div>
      </Form>
    </>
  )
}

export default Register
