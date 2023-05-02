const connection = require('./connection');

const productsSold = async (saleId, productId, quantity) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return result.affectedRows; // nao cria um insertedId pq a tabela nao tem o ID como auto_increment
};

module.exports = { productsSold };
