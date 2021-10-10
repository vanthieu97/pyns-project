import { message, Table, Typography } from 'antd'
import Head from 'next/head'
import React, { useEffect, useMemo, useState } from 'react'
import { useGetReportsQuery } from 'redux/pynsAPIs'
import { DEFAULT_LIMIT } from 'shared/constants'
import { exportReport, getErrorMessage } from 'shared/utility'
import columns from './columns'

const History = () => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(DEFAULT_LIMIT)

  const {
    data: getReportsData,
    error: getReportsError,
    isFetching: getReportsLoading,
  } = useGetReportsQuery({ offset, limit })
  const { records } = getReportsData ?? {}

  useEffect(() => {
    if (getReportsError) {
      message.error(getErrorMessage(getReportsError))
    }
  }, [getReportsError])

  const pagination = useMemo(() => {
    if (getReportsData) {
      return {
        pageSize: getReportsData.limit,
        total: getReportsData.total,
        current: Math.floor(offset / limit) + 1,
        pageSizeOptions: [10, 20, 50],
      }
    }
  }, [getReportsData])

  const changeTableHandler = (pagination) => {
    const newOffset = limit * (pagination.current - 1)
    if (newOffset !== offset) {
      setOffset(newOffset)
    } else if (pagination.pageSize !== limit) {
      setLimit(pagination.pageSize)
    }
  }

  const onClickDownload = (value) => {
    const selectedRecord = records.find(({ id }) => id === value)
    selectedRecord && exportReport(selectedRecord.pdf)
  }

  return (
    <div>
      <Head>
        <title>Lịch sử xuất báo cáo</title>
      </Head>
      <Typography.Title level={4} className="text-center">
        Lịch sử xuất báo cáo
      </Typography.Title>
      <Typography.Text>Số kết quả: {getReportsData?.total}</Typography.Text>
      <Table
        size="small"
        className="mt-12"
        rowKey="id"
        loading={getReportsLoading}
        pagination={pagination}
        columns={columns(onClickDownload)}
        dataSource={records}
        scroll={{ x: 576 }}
        onChange={changeTableHandler}
      />
    </div>
  )
}

export default History
