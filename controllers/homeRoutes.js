const router = require('express').Router();

router.get('/', (req,res)=> {
    res.render('homepage');
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