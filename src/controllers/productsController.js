const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(Number(id));

  if (product.type === 404) return res.status(product.type).json({ message: product.message });

  return res.status(product.type).json(product.message);
};

module.exports = { getAll, getById };
