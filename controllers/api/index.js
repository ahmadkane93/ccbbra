const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const reservationRoutes = require('./reservationRoute');

router.use('/customer',customerRoutes);
router.use('/reservation', reservationRoutes);

module.exports = router;