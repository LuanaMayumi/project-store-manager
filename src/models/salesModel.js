const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id AS 'saleId',
      s.date AS 'date',
      sp.product_id AS 'productId',
      sp.quantity AS 'quantity'
      FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s
      ON sp.sale_id = s.id
      ORDER BY sp.sale_id ASC,
      sp.product_id;`,
  );
  return sales;
};

const getById = async (saleId) => {
  const [sales] = await connection.execute(
    `SELECT s.date AS 'date',
      sp.product_id AS 'productId',
      sp.quantity AS 'quantity'
      FROM StoreManager.sales AS s
      INNER JOIN StoreManager.sales_products AS sp
      ON s.id = sp.sale_id
      WHERE sp.sale_id = ?;`,
    [saleId],
  );
  return sales;
};

const createSale = async () => {
  // no primeiro array (vendas),
  // insiro um objeto com a venda
  // que contem um insertId
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUE ()',
  );
  return insertId;
};

module.exports = { getAll, getById, createSale };
