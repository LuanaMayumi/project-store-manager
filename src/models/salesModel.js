const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return sales;
};

const createSale = async () => { // no primeiro array (vendas),
  // insiro um objeto com a venda
  // que contem um insertId
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUE ()',
  );
  return insertId;
};

module.exports = { getAll, createSale };
