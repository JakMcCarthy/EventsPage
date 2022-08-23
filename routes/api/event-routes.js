const router = require('express').Router();
const {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,

} = require('../../controllers/event-controller');

//! /api/event
router.route('/').get(getAllEvents).post(createEvent);

//! /api/event/:id
router
  .route('/:id')
  .get(getEventById)
  .put(updateEvent)
  .delete(deleteEvent);


module.exports = router;
