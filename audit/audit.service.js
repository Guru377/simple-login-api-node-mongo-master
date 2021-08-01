const config = require('config.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Audit = db.Audit;
const User = db.User;

module.exports = {
    audit
};



async function audit(req) {
    let token = req.headers.authorization.split(' ')[1];
    var user = jwt.verify(token, config.secret).sub;
    var user= await User.findById(user).select("-hash");
    if(user.auditor){
        return await Audit.find();
    }
    return null;
}