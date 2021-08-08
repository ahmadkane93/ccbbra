const router = require ('express').Router();
const { customer } = require('../../models')

router.post('/', async (req, res) => {
    try {
      const customerData = await customer.create(req.body);
  
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
  
    //     res.status(200).json(userData);
    //   });
    res.status(200).json(customerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;