const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^[a-z.]+@[a-z]+.[a-z]{2,3}$/gi],
    },
    password:{
      type:String,
      required:true,
      minLength:8,
    },
    events: [
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

UserSchema.virtual('eventCount').get(function () {
  return this.events.length;
});

const User = model('User', UserSchema);

module.exports = User;
