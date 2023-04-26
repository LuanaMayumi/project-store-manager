const connection = require('./connection')

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products'
  )
  // console.log(products)
  return products;
}
// getAll()

module.exports = { getAll }
