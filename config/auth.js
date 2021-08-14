
module.exports={
  
   ensureAuthenticated: function(req, res, next) {
     console.log('onemore')
      if (req.isAuthenticated()) {
        return next();
        
      }
      req.flash('error_msg', 'Please log in to view that resource');
      console.log("password")
      res.redirect('/');
    },
    forwardAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/carlist');      
    }
  }
