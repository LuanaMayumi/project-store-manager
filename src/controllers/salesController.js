const salesService = require('../services/salesService');

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();
  return res.status(200).json(sales);
};

const createSale = async (req, res) => {
  const sales = req.body;
  const createdSale = await salesService.createSale(sales);
  return res.status(createdSale.type).json(createdSale.message);
};

module.exports = { getAll, createSale };
