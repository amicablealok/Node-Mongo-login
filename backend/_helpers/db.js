const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect( config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
    .then(db =>{
        console.log('connected to db ')
    })
    .catch(err =>{
        console.log(err);
    })
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};
