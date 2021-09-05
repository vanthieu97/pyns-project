import moment from 'moment'
import { DATE_FORMAT } from 'shared/constants'

export default [
  {
    title: 'STT',
    dataIndex: 'id',
    align: 'center',
  },
  {
    title: 'Tên gói',
    dataIndex: 'name',
  },
  {
    title: 'Thời gian mua',
    dataIndex: 'bought_date',
    align: 'center',
    render: (value) => moment(value).format(DATE_FORMAT),
  },
  {
    title: 'Số lượng mua',
    dataIndex: 'quantity',
    align: 'center',
  },
  {
    title: 'Đã dùng',
    dataIndex: 'used',
    align: 'center',
  },
  {
    title: 'Còn lại',
    dataIndex: 'remain',
    align: 'center',
  },
]
