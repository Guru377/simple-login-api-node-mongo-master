const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now },
    ip: {type: String, require: true},
    activity : {type: String, require : true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Audit', schema);