const router = require('express').Router();
const resRoutes = require('./reservationRoute');
const customerRoutes = require('./customerRoutes');
const agencyRoutes = require ('./agencyroutes')



router.use('/reservation',resRoutes);
router.use('/customer',customerRoutes);
router.use('/agency',agencyRoutes)



module.exports = router;