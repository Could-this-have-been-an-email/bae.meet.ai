const router = require('express').Router();
const userController = require('../../controllers/userController');
const passport = require("../../config/passport");


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

router
  .post('/login', passport.authenticate('local'),
    function (req, res) {
      console.log('req', req.user._id);
      // console.log('res', res);
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      // location.assign(`/api/user/${req.user._id}`)
      console.log("REEEEEEE")
      res.redirect(`/user/:${req.user._id}`);
    });


// router.post('/login',
//   passport.authenticate('local', {
//     successRedirect: `/`,
//     failureRedirect: '/login',
//     failureFlash: true
//   })
// );







// router
//   .get('/login', (req, res) => {
//     console.log(res)
//   })

module.exports = router;
