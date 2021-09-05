import { Table, Typography } from 'antd'
import Head from 'next/head'
import React from 'react'
import columns from './columns'

const History = () => {
  return (
    <div>
      <Head>
        <title>Lịch sử xuất báo cáo</title>
      </Head>
      <Typography.Title level={4} className="text-center">
        Lịch sửa xuất báo cáo
      </Typography.Title>
      <Typography.Text>Số kết quả: {2}</Typography.Text>
      <Table
        size="small"
        className="mt-12"
        rowKey="id"
        pagination={false}
        columns={columns}
        dataSource={new Array(15)
          .fill({
            export_date: '2021-09-02T19:05:42.005Z',
            name: 'Nguyễn Văn ',
            date_of_birth: '1999-09-02T19:05:42.005Z',
          })
          .map(({ name, ...rest }, id) => ({ id: id + 1, name: name + (id + 1), ...rest }))}
        scroll={{ x: 576 }}
      />
    </div>
  )
}

export default History
