import { Button, Col, message, Row, Table, Typography } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
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
      <Row justify="space-between">
        <Col>
          <Typography.Text>Số kết quả: {data?.total}</Typography.Text>
        </Col>
        <Col>
          <Link href="/purchase">
            <Button type="primary">Mua gói</Button>
          </Link>
        </Col>
      </Row>
      <Table
        size="small"
        className="mt-12"
        rowKey="pack_code"
        loading={loading}
        pagination={false}
        columns={columns}
        dataSource={data?.records}
        scroll={{ x: 576 }}
        pagination={pagination}
        onChange={changeTableHandler}
      />
    </div>
  )
}

export default Package
