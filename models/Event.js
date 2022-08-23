
const { Schema, model } = require('mongoose');
const moment = require('moment');

const EventSchema = new Schema(
  {
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
        moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
    },
    eventTime: {
      type: Date,
      required: true
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

EventSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


const Event = model('Event', EventSchema);


module.exports = Event;

