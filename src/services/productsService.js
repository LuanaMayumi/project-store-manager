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

const createProduct = async (product) => { // qdo cria um produto, cria um ID
  const createdProductId = await productsModel.createProduct(product);
  // console.log(createdProductId);
  if (!createdProductId) return { type: 404, message: 'Product not created' };

  return { type: 201, message: createdProductId };
};

const update = async (productId) => {
  const updatedProduct = await productsModel.update(productId);
  if (!updatedProduct) return { type: 404, message: 'Product not found' };
  return { type: 200, message: updatedProduct };
};

const deleteProduct = async (productId) => {
  const deletedProduct = await productsModel.deleteProduct(productId);
  if (deletedProduct === 0) return { type: 404, message: 'Product not found' };
  return { type: 204, message: '' };
};

module.exports = { getAll, getById, createProduct, update, deleteProduct };
