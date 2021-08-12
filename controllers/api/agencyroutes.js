const router = require ('express').Router();
const { agency } = require('../../models')

router.get('/', async(req,res) => {
    try {
      console.log ("agency")
        const agencyNames = await agency.findAll({
         attributes: ['id','agencyName'] 
         });

        return res.json(agencyNames);
    }
    catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;