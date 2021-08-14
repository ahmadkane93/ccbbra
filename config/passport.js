
const bcrypt = require('bcrypt')
const User = require ('../models/customer')
const LocalStrategy = require('passport-local').Strategy;


module.exports = function(passport) {
  
passport.use(new LocalStrategy(  {
      usernameField : 'email',
      passwordField : 'password'
},
  (email, password, done) => {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect Email.' });
      }
      bcrypt.compare(password, user.password,(err,isMatch)=>{
        
        if(err) throw err;
        
        if(isMatch){
          return done(null, user)
        }else{
          return done(null,false,{message:'Password Incorrect'})
        }
      });

    })
    .catch(err=> console.log(err));
  }
  
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  user.findById(id, function(err, user) {
    done(err, user);
  });
});
};
