const router = require ('express').Router();
const passport = require ('passport')
const session = require('express-session')

const { customer, reservation, } = require('../../models');
const { rawAttributes } = require('../../models/agency');

router.post('/', async (req, res) => {
    try {
      const customerData = await customer.create(req.body);
  
    res.status(200).json(customerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });



  router.get('/myres/:id', async(req,res) => {
    try {
        const customerData = await customer.findByPk(req.params.id
        ,{

        include: {model: reservation,
                  attributes: ['first_name','last_name']
                }

        }
        );
        
        return res.json(customerData);
    }
    catch (err) {
      res.status(500).json(err);
    }
  });




  


  module.exports = router;