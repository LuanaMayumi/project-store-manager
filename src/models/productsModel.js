const connection = require('./connection')

const getAll = async () => {
  const [products] = connection.execute(
    'SELECT * FROM products'
  )
  return products;
}

module.exports = { getAll }
