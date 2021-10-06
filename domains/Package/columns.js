import moment from 'moment'
import { BE_DATE_FORMAT, DATE_FORMAT } from 'shared/constants'

const statusNameMapping = {
  not_confirmed: 'Chờ xác nhận',
  confirmed: 'Đã xác nhận',
  cancelled: 'Đã hủy',
}

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
    dataIndex: 'total_quantity',
    align: 'center',
  },
  {
    title: 'Giá mua',
    dataIndex: 'purchased_price',
    align: 'center',
    render: (value) => (value ?? '').toLocaleString('en-IN'),
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    align: 'center',
    render: (value) => statusNameMapping[value],
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
