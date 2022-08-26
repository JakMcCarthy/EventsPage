const { User, Event } = require('../models');
const bcrypt = require('bcrypt');

const userController = {
  getAllUsers: function (req, res) {
    User.find()
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  getUserById: function ({ params }, res) {
    User.findOne({ _id: params.id })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  postNewUser: function ({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  udpateUserById: function ({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'User ID not found' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  updateUserPassword: function ({ params, body }, res) {
    User.findById(params.id, function (err, doc) {
      if (err) return false;
      doc.password = body.password;
      doc.save();
      res.json({ message: 'password updated' });
    });
  },
  deleteUser: function ({ params }, res) {
    Event.deleteMany({ userId: params.id })
      .then(() => {
        User.findOneAndDelete({ userId: params.id }).then((dbUserData) => {
          if (!dbUserData) {
            res.status(404).json({ message: 'User ID not found' });
            return;
          }
          res.json(dbUserData);
        });
      })
      .catch((err) => res.json(err));
  },
  // /api/users/login
  userLogin: function ({ body }, res) {
    User.findOne({ username: body.username })
      .then((dbUserData) =>
        bcrypt.compare(
          body.password,
          dbUserData.password,
          function (err, result) {
            if (result) {
              res.json(dbUserData);
            }
            if (!result) {
              res.sendStatus(400);
            }
          }
        )
      )
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
};

module.exports = userController;
