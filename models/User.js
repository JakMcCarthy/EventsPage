const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^[a-z.]+@[a-z]+.[a-z]{2,3}$/gi],
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    eventsCreated: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    eventsAttended: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.virtual('eventsCreatedCount').get(function () {
  return this.eventsCreated.length;
});

UserSchema.virtual('eventsAttendeeCount').get(function () {
  return this.eventsAttended.length;
});

const User = model('User', UserSchema);

module.exports = User;
