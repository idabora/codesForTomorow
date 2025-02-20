const express = require('express');
const { createCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');
const { addService, getServices, updateService, deleteService } = require('../controllers/serviceControllers');

const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router();
router.post('/', verifyToken, createCategory);
router.get('/categories', verifyToken, getCategories);
router.put('/:categoryId', verifyToken, updateCategory);
router.delete('/:categoryId', verifyToken, deleteCategory);


router.post('/:categoryId/service', verifyToken, addService);
router.get('/:categoryId/services', verifyToken, getServices);
router.put('/:categoryId/service/:serviceId', verifyToken, updateService);
router.delete('/:categoryId/service/:serviceId', verifyToken, deleteService);

module.exports = router;
