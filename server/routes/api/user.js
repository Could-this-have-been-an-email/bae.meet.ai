const router = require('express').Router();
const userController = require('../../controllers/userController');
const passport = require("../../config/passport");
const isAuthenticated = require('../../config/middlewear/isAuthenticated');
const url = require('url');


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


router.post('/login',
  passport.authenticate('local'),
  function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log(req.user)
    res.redirect(`/user/${req.user._id}`,
    )

  });




router.route(`/user/:id`)
  .get(userController.findById)






module.exports = router;
