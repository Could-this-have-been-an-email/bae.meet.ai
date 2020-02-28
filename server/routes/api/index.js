const router = require('express').Router();
const meetingRoutes = require('./meeting');
const userRoutes = require('./user');

router.use('/meeting', meetingRoutes);
router.use('/user', userRoutes);

module.exports = router;
