const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  postNewUser,
  udpateUserById,
  deleteUser,
  userLogin,
  updateUserPassword,
} = require('../../controllers/user-controller');

//! /api/user
router.route('/').get(getAllUsers).post(postNewUser);

//! /api/user/:id
router.route('/:id').get(getUserById).put(udpateUserById).delete(deleteUser);

//! /api/user/:id/updatepassword
router.route('/:id/updatepassword').post(updateUserPassword);

//! /api/user/login
// expects {"username":"amhaag","password":"password123"}
router.route('/login').post(userLogin);

module.exports = router;
