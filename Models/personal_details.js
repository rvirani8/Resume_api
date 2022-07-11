const mongoose = require('mongoose');

const personal_details = new mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    photo:{
        type:String
    }
})

const personal = new  mongoose.model('personal',personal_details);

module.exports = personal;