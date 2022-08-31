const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
let SALT_ROUNDS = 10;

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
      // select: false,
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
      versionKey: false,
    },
  }
);

UserSchema.virtual('eventsCreatedCount').get(function () {
  return this.eventsCreated.length;
});

UserSchema.virtual('eventsAttendeeCount').get(function () {
  return this.eventsAttended.length;
});

UserSchema.pre('save', function (next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = model('User', UserSchema);

module.exports = User;
