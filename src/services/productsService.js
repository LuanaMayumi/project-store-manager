const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (productId) => {
  const product = await productsModel.getById(productId);

  if (!product) return { type: 404, message: 'Product not found' };

  return { type: 200, message: product };
};

module.exports = { getAll, getById };
