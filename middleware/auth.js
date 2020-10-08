const User = require('../database/models/User');

module.exports = (req, res, next) => {
    // fetch user from database
    User.findById(req.session.userId, (error, user) => {
        // Verify user
        if(error || !user){
            return res.redirect('/');
        }
        else{

        }
        next();
    })
}