const mongoose = require('mongoose');

const skill_details = new mongoose.Schema({
    skills:{
        type:String
    },
    level:{
        type:Number
    }
})

const skill = new  mongoose.model('skill',skill_details);

module.exports = skill;