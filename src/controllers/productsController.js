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

const createProduct = async (req, res) => {
  const name = req.body;
  const createdProductId = await productsService.createProduct(name);

  if (createdProductId.type === 404) {
    return res
      .status(createdProductId.type).json({ message: createdProductId.message });
  }

  return res.status(createdProductId.type).json(createdProductId.message);
};

const update = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const productSearched = await productsService.getById(Number(id));
  console.log(productSearched);

  if (productSearched.type === 404) {
    return res
      .status(productSearched.type)
      .json({ message: productSearched.message });
  }

  const updatedProduct = await productsService.update(name);

  return res.status(updatedProduct.type).json(updatedProduct.message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await productsService.deleteProduct(Number(id));
  if (deletedProduct.type === 404) {
    return res.status(deletedProduct.type).json({ message: deletedProduct.message });
  }
  return res.status(deletedProduct.type).send();
  // return res.status(deletedProduct.type).json(deletedProduct.message);
};

module.exports = { getAll, getById, createProduct, update, deleteProduct };
