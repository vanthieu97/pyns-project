import React from 'react'
import Head from 'next/head'
import styles from './styles'
import { Col, Row, Typography, Form, Input, DatePicker, Button } from 'antd'
import { DATE_FORMAT } from 'shared/constants'
import { useSelector } from 'react-redux'

const { Item } = Form

const Home = () => {
  const [form] = Form.useForm()
  const token = useSelector((state) => state.user.token)

  const onClickExport = () => {
    form.validateFields().then((values) => console.log(values))
  }

  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Row gutter={12}>
        <Col span={24} lg={token ? 16 : null}>
          <img src="/images/logo.png" width={200} alt="logo" />
          <Typography.Text className="d-block">Introduce about PyNS</Typography.Text>
          <img
            src="https://image-component.nextjs.gallery/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmountains.cd25efdd516891bfe546f854798714be.jpg&w=750&q=75"
            alt="logo"
            width="100%"
          />
        </Col>
        {token && (
          <Col span={24} lg={8} className="export-form-wrapper">
            <Form form={form} labelCol={{ span: 6 }} labelAlign="left" className="form-wrapper">
              <Item name="name" label="Họ tên" required rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}>
                <Input placeholder="Nhập họ tên" />
              </Item>
              <Item
                name="birthday"
                label="Ngày sinh"
                required
                rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
              >
                <DatePicker className="w-100" format={DATE_FORMAT} placeholder="Chọn ngày sinh" />
              </Item>
              <div className="text-center">
                <Button type="primary" ghost onClick={onClickExport} className="mt-8">
                  Xuất báo cáo
                </Button>
              </div>
            </Form>
          </Col>
        )}
      </Row>
      <style jsx>{styles}</style>
    </>
  )
}

export default Home
