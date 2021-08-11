const router = require ('express').Router();
const { reservation } = require('../../models')


router.get('/:id', async(req,res) => {
  try {
      const reservationData = await reservation.findByPk(req.params.id);

      return res.json(reservationData);
  }
  catch (error) {
    res.status(500).json(err);
  }
});

router.post('/', async (req,res) => {
  try {
    const reservationData = await reservation.create(req.body);

    return res.json(reservationData);
    
  } catch (error) {
    res.status(500).json(err);
  }
})


module.exports = router;
