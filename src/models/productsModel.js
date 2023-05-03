const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  // console.log('model', products);
  return products;
};

const getById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  // console.log(product);
  return product;
};

const createProduct = async (product) => {
  const result = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [product],
  );
  // console.log('mock para o create', result);
  const [{ insertId }] = result;
  return { id: insertId, name: product.name };
  // return newProduct.insertId; //
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
