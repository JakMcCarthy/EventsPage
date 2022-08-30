const { Event } = require('../models');

const eventController = {
  getAllEvents: function (req, res) {
    Event.find()
      .then((dbEventData) => res.json(dbEventData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  getEventById: function ({ params }, res) {
    Event.findOne({ _id: params.id })
      .then((dbEventData) => res.json(dbEventData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  createEvent: function ({ body }, res) {
    Event.create(body)
      .then((dbEventData) => res.json(dbEventData))
      .catch((err) => res.json(err));
  },
  updateEvent({ params, body }, res) {
    Event.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbEventData) => {
        if (!dbEventData) {
          res.status(404).json({ message: 'Event ID not found' });
          return;
        }
        res.json(dbEventData);
      })
      .catch((err) => res.json(err));
  },
  deleteEvent({params},res){
    Event.findOneAndDelete({ eventId: params.id }).then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: 'Event ID not found' });
        return;
      }
      res.json(dbEventData);
    });
  }
};

module.exports = eventController;
