const { Schema, model } = require('mongoose');
const moment = require('moment');

const EventSchema = new Schema(
  {
    eventTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 60,
    },
    eventText: {
      type: String,
      required: true,
      minlength: 5,
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
      type: String,
      required: true,
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    ticketPrice: {
      type: Number,
      required: false,
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
