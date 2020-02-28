const router = require('express').Router();
const meetingController = require('../../controllers/meetingController');

// match with /api/meeting
router
  .route('/')
  .get(meetingController.findAll)
  .post(meetingController.create);

router
  .route('/:id')
  .get(meetingController.findById)
  .put(meetingController.update)
  .delete(meetingController.delete);

module.exports = router;
