const router = require('express').Router();
const goodsController = require('../controllers/goods_controller');

router.route('/goods')
    .get(goodsController.getPage);
router.route('/goods_cats')
    .get(goodsController.getPageCats);
router.route('/goods/:id')
    .get(goodsController.getSingle);
module.exports = router;