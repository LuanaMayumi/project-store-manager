const { getById } = require('../models/productsModel');

const validateProductId = async (req, res, next) => {
  const arrayBody = req.body;

  for (let index = 0; index < arrayBody.length; index += 1) {
    if (!arrayBody[index].productId) {
      return res.status(400).json({ message: '"productId" is required' });
    }
  }
  return next();
};

const validateProductExistOnDB = async (req, res, next) => {
  const arrayBody = req.body;
  const idExistDb = await Promise.all(arrayBody.map((el) => getById(el.productId)));

  for (let index = 0; index < idExistDb.length; index += 1) {
    if (idExistDb[index] === undefined) {
      return res.status(404).json({ message: 'Product not found' });
    }
  }
  return next();
};

const validateQuantity = (req, res, next) => {
  const arrayBody = req.body;
  for (let index = 0; index < arrayBody.length; index += 1) {
    if (arrayBody[index].quantity === undefined) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    if (arrayBody[index].quantity <= 0) {
      return res
        .status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
  }
  return next();
};

module.exports = {
  validateProductExistOnDB,
  validateProductId,
  validateQuantity,
};
