export const getErrorMessage = ({ message }) => message || 'Lỗi không xác định'

export const exportReport = (pdf) => {
  window.open(`${process.env.EXPORT_URL}/?pdf=${pdf}`)
}
