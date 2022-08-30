const router = require('express').Router();
const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes')
router.use('/user', userRoutes);
router.use('/event',eventRoutes)

router.use((req, res) => {
  res.status(404).send('Not found');
});

module.exports = router;
