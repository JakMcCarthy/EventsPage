const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  postNewUser,
  udpateUserById,
  deleteUser,
} = require('../../controllers/user-controller');

//! /api/user
router.route('/').get(getAllUsers).post(postNewUser);

//! /api/user/:id
router.route('/:id').get(getUserById).put(udpateUserById).delete(deleteUser);

module.exports = router;
