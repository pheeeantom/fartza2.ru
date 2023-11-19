const router = require('express').Router();
const usersController = require('../controllers/users_controller');

/*router.route('/users/:id')
    .get(usersController.getSingle);*/
router.route("/subscribe/:id")
    .post(usersController.subscribe);
router.route("/unsubscribe/:id")
    .delete(usersController.unsubscribe);
router.route("/subscriptions")
    .get(usersController.subscriptions);

router.route("/favorites/:id")
    .post(usersController.addToFavorites);
router.route("/favorites/:id")
    .delete(usersController.removeFromFavorites);
router.route("/favorites")
    .get(usersController.favorites);
router.route("/is_favorite/:id")
    .get(usersController.isFavorite);

router.route('/users/:id')
    .post(usersController.multi_upload, usersController.edit);

router.route('/current_user')
    .get(usersController.currentUser);
module.exports = router;