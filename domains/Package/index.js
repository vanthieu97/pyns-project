import { message, Table, Typography } from 'antd'
import Head from 'next/head'
import React, { useMemo, useState, useEffect } from 'react'
import { useGetMyPacksQuery } from 'redux/pynsAPIs'
import { DEFAULT_LIMIT } from 'shared/constants'
import { getErrorMessage } from 'shared/utility'
import columns from './columns'

const Package = () => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(DEFAULT_LIMIT)

  const { data, error, isFetching: loading } = useGetMyPacksQuery({ offset, limit })

  useEffect(() => {
    if (error) {
      message.error(getErrorMessage(error))
    }
  }, [error])

  const pagination = useMemo(() => {
    if (data) {
      return {
        pageSize: data.limit,
        total: data.total,
        current: Math.floor(offset / limit) + 1,
        pageSizeOptions: [10, 20, 50],
      }
    }
  }, [data])

  const changeTableHandler = (pagination) => {
    const newOffset = limit * (pagination.current - 1)
    if (newOffset !== offset) {
      setOffset(newOffset)
    } else if (pagination.pageSize !== limit) {
      setLimit(pagination.pageSize)
    }
  }

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
        loading={loading}
        pagination={false}
        columns={columns}
        dataSource={new Array(15)
          .fill({ name: 'Gói ', bought_date: '2021-09-02T19:05:42.005Z', quantity: 5, used: 3, remain: 2 })
          .map(({ name, ...rest }, id) => ({ id: id + 1, name: name + (id + 1), ...rest }))}
        scroll={{ x: 576 }}
        pagination={pagination}
        onChange={changeTableHandler}
      />
    </div>
  )
}

export default Package
