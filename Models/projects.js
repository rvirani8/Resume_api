const mongoose = require('mongoose');

const project_details = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    }
 
})

const project = new  mongoose.model('project',project_details);

module.exports = project;