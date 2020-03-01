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
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      console.log("REEEEEEE")
      res.sendStatus(200);
    });



// router.get('/login', function (req, res, next) {
//   passport.authenticate('local', function (err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return console.log('not user') }
//     req.logIn(user, function (err) {
//       if (err) { return next(err); }
//       return res.redirect('/users/' + user.username);
//     });
//   })(req, res, next);
// });


// router
//   .get('/login', (req, res) => {
//     console.log(res)
//   })

module.exports = router;
