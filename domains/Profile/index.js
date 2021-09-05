import { Button, Form, Typography } from 'antd'
import UserForm from 'components/UserForm'
import Head from 'next/head'
import React from 'react'

const { Title } = Typography
const Profile = () => {
  const [form] = Form.useForm()

  const onClickSubmit = () => {}

  return (
    <div className="form-wrapper">
      <Head>
        <title>Thông tin cá nhân</title>
      </Head>
      <Title level={2} className="text-center">
        Thông tin cá nhân
      </Title>
      <UserForm form={form} />
      <div className="text-center">
        <Button type="primary" onClick={onClickSubmit} className="mt-8" size="large">
          Cập nhật
        </Button>
        <br />
      </div>
    </div>
  )
}

export default Profile
