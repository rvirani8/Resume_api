const mongoose = require('mongoose');

const objective_details = new mongoose.Schema({
    objective:{
        type:String
    }
})

const objective = new  mongoose.model('objective',objective_details);

module.exports = objective;