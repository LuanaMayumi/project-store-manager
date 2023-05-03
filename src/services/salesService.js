const salesModel = require('../models/salesModel');
// const productsSolddModel = require('../models/productsSoldModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

const getById = async (saleId) => {
  const sales = await salesModel.getById(saleId);

  if (sales.length === 0) return { type: 404, message: 'Sale not found' };

  return { type: 200, message: sales };
};

const createSale = async (sales) => {
  const newSaleId = await salesModel.createSale();
  // const productsSold = await Promise.all(
  //   sales.map((sale) =>
  //     // Promise.all é usado para garantir que a variável productsSold espere todas as promises serem resolvidas antes de sair do MAP e continuar
  //     // a variavel productsSold vai retornar um array de 0 e 1
  //     // pq o meu retorno da função productsSold é o affectedRows - 1 significa que deu certo a inserção, 0 que não deu certo
  //     productsSolddModel.productsSold(
  //     // faz uma inserção na tabela para cada sale
  //       newSaleId,
  //       sale.productId,
  //       sale.quantity,
  //     )),
  // );
  // console.log(productsSold);
  return { type: 201, message: { id: newSaleId, itemsSold: [...sales] } };
};

module.exports = {
  getAll,
  getById,
  createSale,
};
