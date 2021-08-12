const router = require ('express').Router();
const { agency } = require('../../models')

router.get('/', async(req,res) => {
    try {
        const agencyName = await agency.findall({
          
          include: {
          attributes:['agencyName']
        }});

        return res.json(agencyName);
    }
    catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;