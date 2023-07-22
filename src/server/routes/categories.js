const router = require('express').Router();
const categoriesController = require('../controllers/categories_controller');

router.route('/categories/all')
    .get(categoriesController.getAll);
module.exports = router;