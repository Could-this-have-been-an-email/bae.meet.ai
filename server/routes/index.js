const router = require('express').Router();
const apiRoutes = require('./api');

// api routes
router.use('/api', apiRoutes);

// one get route

router.get('/', (req, res) => {
  res.render('');
});

module.exports = router;
