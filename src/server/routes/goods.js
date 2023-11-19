const router = require('express').Router();
const goodsController = require('../controllers/goods_controller');

router.route('/goods')
    .get(goodsController.getPage);
router.route('/goods_cats')
    .get(goodsController.getPageCats);
router.route('/goods/:id')
    .get(goodsController.getSingle);
router.route('/goods/nick/:nick')
    .get(goodsController.getByNick);
router.route('/goods/create')
    .post(goodsController.multi_upload, goodsController.create);
router.route('/goods/:id')
    .post(goodsController.mark);
module.exports = router;