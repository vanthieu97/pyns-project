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
    dataIndex: 'package_name',
  },
  {
    title: 'Số lần dùng',
    dataIndex: 'package_quantity',
    align: 'center',
  },
  {
    title: 'Số lượng gói',
    dataIndex: 'package_count',
    align: 'center',
  },
  {
    title: 'Tổng lần dùng',
    dataIndex: 'total_quantity',
    align: 'center',
  },
  {
    title: 'Thời gian mua',
    dataIndex: 'purchased_at',
    align: 'center',
  },
  {
    title: 'Giá mua',
    dataIndex: 'purchased_price',
    align: 'center',
    render: (value) => (value ?? '').toLocaleString(),
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
