const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.getAll);

router.get('/:id', productsController.getById);

router.post('/', productsController.createProduct);

module.exports = router;
