const router = require('express').Router();
const resRoutes = require('./reservationRoute');
const customerRoutes = require('./customerRoutes');



router.use('/reservation',resRoutes);
router.use('/customer',customerRoutes);



module.exports = router;