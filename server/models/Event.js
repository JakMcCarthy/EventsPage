const { Schema, model } = require('mongoose');
const moment = require('moment');

const EventSchema = new Schema(
  {
    eventTitle: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 60,
    },
    eventText: {
      type: String,
      required: true,
      minlength: 15,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format('YYYY-MM-DDTHH:mm:ssZ'),
    },
    creator: {
      type: String,
      required: true,
    },
    eventTime: {
      type: Date,
      required: true,
      get: (eventTimeval) =>
        moment(eventTimeval).format('YYYY-MM-DDTHH:mm:ssZ'),
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    ticketPrice: {
      type: Number,
      required: true,
    },
  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

EventSchema.virtual('attendeesCount').get(function () {
  return this.attendees.length;
});

const Event = model('Event', EventSchema);

module.exports = Event;
