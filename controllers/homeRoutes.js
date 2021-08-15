const router = require('express').Router();
const {agency,vehicle} = require('../models')
const {ensureAuthenticated} = require('../config/auth') 

router.get('/', async (req,res)=> {
    
        
    
    res.render('homepage');
});

router.get('/signup',(req,res)=> {
    res.render('signup');
});

router.get('/reservation',(req,res)=> {
    res.render('reservation');
});

router.get('/carlist',ensureAuthenticated, async (req,res)=> {
    
    const agencyNames = await agency.findAll({
        attributes: ['id','agencyName'] 
        }).catch((err)=> res.json(err));

        const agencys = agencyNames.map((agency)=> agency.get({plain: true}));

        const cars = await vehicle.findAll({ 
        }).catch((err)=> res.json(err));

        const car = cars.map((vehicle)=> vehicle.get({plain: true}));
        const user = req.user.dataValues;
        
        
    res.render('carlist',{car,agencys,user});
    
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});




module.exports = router;