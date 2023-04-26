const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  // console.log(products)
  return products;
};
// getAll()

const getById = async (productId) => { // precisa de [[]] ?
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  // console.log(product)
  return product;
};
// getById(2)

module.exports = { getAll, getById };
