import { Button } from 'antd'
import moment from 'moment'
import { BE_DATE_FORMAT, DATE_FORMAT } from 'shared/constants'

export default (onDownload) => [
  {
    title: 'STT',
    dataIndex: 'id',
    align: 'center',
  },
  {
    title: 'Thời gian xuất',
    dataIndex: 'created_at',
    align: 'center',
    render: (value) => moment(value, BE_DATE_FORMAT).format(DATE_FORMAT),
  },
  {
    title: 'Họ tên',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'date_of_birth',
    align: 'center',
  },
  {
    title: 'Hành động',
    dataIndex: 'id',
    align: 'center',
    render: (value) => (
      <Button type="primary" ghost onClick={() => onDownload(value)}>
        Tải về
      </Button>
    ),
  },
]
