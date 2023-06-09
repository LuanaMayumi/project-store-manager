const express = require('express');
const productsController = require('../controllers/productsController');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', productsController.getAll);

router.get('/:id', productsController.getById);

router.post('/', validateName, productsController.createProduct);

router.put('/:id', validateName, productsController.update);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;
