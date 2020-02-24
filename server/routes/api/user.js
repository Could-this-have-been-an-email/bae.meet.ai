const router = require('express').Router();
const userController = require('../../controllers/userController');

// match with /api/user
router
  .route('/')
  .get(userController.findAll)
  .post(userController.create);

router
  .route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.delete);

module.exports = router;
