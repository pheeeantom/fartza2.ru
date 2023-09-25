const router = require('express').Router();
const commentsController = require('../controllers/comments_controller');

router.route('/comments/:id')
    .get(commentsController.get);
router.route('/comments/:id')
    .post(commentsController.post);
module.exports = router;