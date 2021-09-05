import { Table, Typography } from 'antd'
import Head from 'next/head'
import React from 'react'
import columns from './columns'

const Package = () => {
  return (
    <div>
      <Head>
        <title>Gói đã mua</title>
      </Head>
      <Typography.Title level={4} className="text-center">
        Danh sách gói đã mua
      </Typography.Title>
      <Typography.Text>Số kết quả: {2}</Typography.Text>
      <Table
        size="small"
        className="mt-12"
        rowKey="id"
        pagination={false}
        columns={columns}
        dataSource={new Array(15)
          .fill({ name: 'Gói ', bought_date: '2021-09-02T19:05:42.005Z', quantity: 5, used: 3, remain: 2 })
          .map(({ name, ...rest }, id) => ({ id: id + 1, name: name + (id + 1), ...rest }))}
        scroll={{ x: 576 }}
      />
    </div>
  )
}

export default Package
