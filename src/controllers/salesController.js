const salesService = require('../services/salesService');

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();
  return res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sales = await salesService.getById(Number(id));
  if (sales.type === 404) {
    return res.status(sales.type).json({ message: sales.message });
  }
  return res.status(sales.type).json(sales.message);
};

const createSale = async (req, res) => {
  const sales = req.body;
  const createdSale = await salesService.createSale(sales);
  return res.status(createdSale.type).json(createdSale.message);
};

module.exports = { getAll, getById, createSale };
