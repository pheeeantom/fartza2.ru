const router = require('express').Router();
const usersController = require('../controllers/users_controller');

router.route('/users/:id')
    .get(usersController.getSingle);
module.exports = router;