const express = require('express');
const salesController = require('../controllers/salesController');
const {
  validateProductId,
  validateProductExistOnDB,
  validateQuantity,
} = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);
router.post('/',
  validateProductId,
  validateProductExistOnDB,
  validateQuantity,
  salesController.createSale);

module.exports = router;
