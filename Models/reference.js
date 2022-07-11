const mongoose = require('mongoose');

const reference_details = new mongoose.Schema({
    referee_name:{
        type:String
    },
    job_title:{
        type:String
    },
    company_name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }
 
})

const reference = new  mongoose.model('reference',reference_details);

module.exports = reference;