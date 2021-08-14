const router = require ('express').Router();
const passport = require ('passport')



const { customer, reservation, } = require('../../models');


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

          attributes: ['id','first_name','last_name'],

        include: {
         
          model: reservation
                  
                }

        }
        );
        
        return res.json(customerData);
    }
    catch (err) {
      res.status(500).json(err);
    }
  });

 router.post('/login', (req,res,next) =>{

    passport.authenticate('local', {
      successRedirect: '/carlist',
      failureRedirect: '/',
      failureFlash: false
    })(req,res,next)
 })

 router.get('/logout', (req, res) => {
  req.logout();
  // req.flash('success_msg', 'You are logged out');
  res.redirect('/');
});



  module.exports = router;