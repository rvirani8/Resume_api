const mongoose = require('mongoose');

const experience_details = new mongoose.Schema({
    company_name:{
        type:String
    },
    job_title:{
        type:String
    },
    start_date:{
        type:String
    },
    end_date:{
        type:String
    },
    details:{
        type:String
    }
   
})

const experience = new  mongoose.model('experience',experience_details);

module.exports = experience;