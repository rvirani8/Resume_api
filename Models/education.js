const mongoose = require('mongoose');

const education_details = new mongoose.Schema({
    course:{
        type:String
    },
    school:{
        type:String
    },
    grade:{
        type:String
    },
    year:{
        type:Number
    }
   
})

const education = new  mongoose.model('education',education_details);

module.exports = education;