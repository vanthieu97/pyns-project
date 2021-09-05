import { Button } from 'antd'
import moment from 'moment'
import { DATE_FORMAT } from 'shared/constants'

export default [
  {
    title: 'STT',
    dataIndex: 'id',
    align: 'center',
  },
  {
    title: 'Thời gian xuất',
    dataIndex: 'export_date',
    align: 'center',
    render: (value) => moment(value).format(DATE_FORMAT),
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
    render: (value) => moment(value).format(DATE_FORMAT),
  },
  {
    title: 'Hành động',
    align: 'center',
    render: (value, record) => (
      <Button type="primary" ghost>
        Tải về
      </Button>
    ),
  },
]
