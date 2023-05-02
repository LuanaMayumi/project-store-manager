const express = require('express');
const salesController = require('../controllers/salesController');
const {
  validateProductId,
  validateQuantity,
} = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/', salesController.getAll);
router.post('/',
  validateProductId,
  validateQuantity,
  salesController.createSale);

module.exports = router;
