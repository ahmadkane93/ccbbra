
const bcrypt = require('bcrypt')
const user = require ('../models/customer')
const LocalStrategy = require('passport-local').Strategy;


module.exports = function(passport) {
  
passport.use(new LocalStrategy(  {
      usernameField : 'email'
},
  (email, password, done) => { 
     user.findOne({where:{ email: email }}).then( user => {
      console.log(user)
      if (!user) {
        return done(null, false, { message: 'Incorrect Email.' });
      }
      console.log('hello')
      bcrypt.compare(password, user.password,(err,isMatch)=>{
        
        if(err) throw err;

        if(isMatch){
          return done(null, user)
        }else{
          return done(null,false,{message:'Password Incorrect'})
        }
      });

    }
    )}
  
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  user.findByPk(id).then(function(user) {
    
    done(null, user);
  }).catch(function(err) {
    if (err) {
      throw err;
    }
 });
});
};
