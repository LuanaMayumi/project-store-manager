const { getById } = require('../models/productsModel');

const validateProductId = async (req, res, next) => {
  const arrayBody = req.body;
  // nao podemos usar HOF - tem () =>
  // o return é executado mas a função continua sendo executada para os outros elementos
  for (let index = 0; index < arrayBody.length; index += 1) {
    if (arrayBody[index].productId === undefined) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    const idExistDb = await Promise.all(getById(arrayBody[index].productId));
    if (arrayBody[index].productId !== getById(arrayBody[index].productId)) {
      return res.status(407).json({ message: 'Product not found' });
    }
  }
  return next();
};

const validateQuantity = (req, res, next) => {
  const arrayBody = req.body;
  for (let index = 0; index < arrayBody.length; index += 0) {
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

module.exports = { validateProductId, validateQuantity };
