const router = require('express').Router();
const {agency} = require('../models')

router.get('/', async (req,res)=> {
    
    const agencyNames = await agency.findAll({
        attributes: ['id','agencyName'] 
        }).catch((err)=> res.json(err));

        const agencys = agencyNames.map((agency)=> agency.get({plain: true}));
        console.log(agencys)
    
    res.render('homepage',{agencys});
});

router.get('/signup',(req,res)=> {
    res.render('signup');
});

router.get('/reservation',(req,res)=> {
    res.render('reservation');
});

router.get('/carlist',(req,res)=> {
    res.render('carlist');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});




module.exports = router;