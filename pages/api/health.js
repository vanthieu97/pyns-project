export default async function handler(req, res) {
  console.info('Health Status check successfully.')
  res.status(200)
  res.end()
}
