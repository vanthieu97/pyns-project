import { Button, Col, DatePicker, Form, Input, message, Row, Typography } from 'antd'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGenerateReportMutation } from 'redux/pynsAPIs'
import { BE_DATE_FORMAT, DATE_FORMAT, PHONE_REGEX } from 'shared/constants'
import { getErrorMessage } from 'shared/utility'
import styles from './styles'

const { Item } = Form

const Home = () => {
  const [form] = Form.useForm()
  const token = useSelector((state) => state.user.token)
  const [generateReport, { data, error, isLoading: loading }] = useGenerateReportMutation()

  useEffect(() => {
    if (data) {
      message.success('Tạo báo cáo thành công')
      window.open(data.pdf, '_self')
    }
  }, [data])

  useEffect(() => {
    if (error) {
      message.error(getErrorMessage(error))
    }
  }, [error])

  const onClickExport = () => {
    form.validateFields().then((values) => {
      const { date_of_birth, ...rest } = values
      generateReport({ ...rest, date_of_birth: date_of_birth.format(BE_DATE_FORMAT) })
    })
  }

  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Row gutter={12}>
        <Col span={24} lg={token ? 16 : null}>
          <img
            src="/images/bg_home_page.jpg"
            alt="logo"
            width="100%"
          />
        </Col>
        {token && (
          <Col span={24} lg={8} className="export-form-wrapper">
            <Form form={form} labelCol={{ span: 8 }} labelAlign="left" className="form-wrapper">
              <Item name="name" label="Họ tên" required rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}>
                <Input placeholder="Nhập họ tên" />
              </Item>
              <Item
                name="date_of_birth"
                label="Ngày sinh"
                required
                rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
              >
                <DatePicker className="w-100" format={DATE_FORMAT} placeholder="Chọn ngày sinh" />
              </Item>
              <Item
                name="phone"
                rules={[
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
              <Item name="email" label="Email" rules={[{ type: 'email', message: 'Vui lòng nhập email hợp lệ' }]}>
                <Input placeholder="Nhập email" />
              </Item>
              <Item name="address" label="Địa chỉ">
                <Input placeholder="Nhập địa chỉ" />
              </Item>
              <div className="text-center">
                <Button type="primary" ghost onClick={onClickExport} className="mt-8" loading={loading}>
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
