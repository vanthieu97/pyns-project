import { Button, Form, InputNumber, message, Select, Typography } from 'antd'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useGetListPacksQuery, usePurchasePackMutation } from 'redux/pynsAPIs'
import { useRouter } from 'next/router'

const { Item } = Form

const Purchase = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const { data: getListPacksData, error: getListPacksError, isFetching: getListPacksLoading } = useGetListPacksQuery()

  const [purchasePack, { isSuccess: purchasePackSuccess, error: purchasePackError, isLoading: purrchasePackLoading }] =
    usePurchasePackMutation()

  useEffect(() => {
    if (purchasePackSuccess) {
      message.success('Mua gói thành công')
      router.push('/package')
    }
  }, [purchasePackSuccess])

  useEffect(() => {
    if (purchasePackError) {
      message.error(getErrorMessage(purchasePackError))
    }
  }, [purchasePackError])

  const onClickPurchase = () => {
    form.validateFields().then(purchasePack)
  }

  return (
    <div>
      <Head>
        <title>Mua gói</title>
      </Head>
      <Typography.Title level={4} className="text-center">
        Mua gói
      </Typography.Title>
      <Form form={form} labelCol={{ span: 6 }} labelAlign="left" className="form-wrapper">
        <Item name="code" label="Gói" required rules={[{ required: true, message: 'Vui lòng chọn gói' }]}>
          <Select placeholder="Chọn gói">
            {getListPacksData?.records.map(({ code, name }) => (
              <Select.Option key={code} value={code}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </Item>
        <Item name="count" label="Số lượng" required rules={[{ required: true, message: 'Vui lòng nhập số lượng' }]}>
          <InputNumber className="w-100" placeholder="Nhập số lượng" min={1} />
        </Item>
        <div className="text-center">
          <Button type="primary" ghost onClick={onClickPurchase} className="mt-8" loading={purrchasePackLoading}>
            Mua gói
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Purchase
