var express = require('express');
var router = express.Router();

const project = require('../Models/projects');

router.post('/project',async function (req,res) {
  
    try {
      const project_data = await project.create(req.body);
  
      res.status(207).json({
        "status":"success",
        data:project_data
      })
    } catch (error) {
      res.json({
        err:error
      })
    }
});

router.delete('/project/delete/:id',async function (req,res) {  
  try {
    const project_data = await project.findByIdAndDelete(req.params.id);
    console.log("delete personal data");
  } catch (error) {
    console.log(error);
  }
});

router.patch('/project/edit/:id',async function (req,res) {  
  try {
    const project_data = await project.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
      "status":"success",
      data:project_data
    })
  } catch (error) {
    console.log(error);
  }
});
  
module.exports = router;