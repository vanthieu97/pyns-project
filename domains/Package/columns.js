import moment from 'moment'
import { BE_DATE_FORMAT, DATE_FORMAT } from 'shared/constants'

export default [
  {
    title: 'STT',
    dataIndex: 'key',
    align: 'center',
  },
  {
    title: 'Tên gói',
    dataIndex: 'pack_name',
  },
  {
    title: 'Thời gian mua',
    dataIndex: 'purchased_at',
    align: 'center',
    render: (value) => moment(value, BE_DATE_FORMAT).format(DATE_FORMAT),
  },
  {
    title: 'Số lượng mua',
    dataIndex: 'pack_quantity',
    align: 'center',
  },
  {
    title: 'Giá mua',
    dataIndex: 'price',
    align: 'center',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    align: 'center',
  },
  {
    title: 'Đã dùng',
    dataIndex: 'used_quantity',
    align: 'center',
  },
  {
    title: 'Còn lại',
    dataIndex: 'remain_quantity',
    align: 'center',
  },
]
