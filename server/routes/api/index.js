const router = require('express').Router();
const movieRoutes = require('./movies');

router.use('/movies', movieRoutes);

module.exports = router;