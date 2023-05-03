const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return products;
};

const getById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return product;
};

const createProduct = async (product) => {
  const result = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [product],
  );
  const [{ insertId }] = result;
  return { id: insertId, name: product.name };
};

const update = async (productId, nameProduct) => {
  await connection.execute(
    `UPDATE StoreManager.products
      SET name = ?
      WHERE id = ?;`,
    [nameProduct, productId],
  );
  return { id: productId, name: nameProduct };
};

const deleteProduct = async (productId) => {
  const [item] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return item.affectedRows;
};

module.exports = { getAll, getById, createProduct, update, deleteProduct };
