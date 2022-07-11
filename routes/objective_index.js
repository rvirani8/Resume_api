var express = require('express');
var router = express.Router();

const objective = require('../Models/objective');

router.post('/objective',async function (req,res) {
  
    try {
      const objective_data = await objective.create(req.body);
  
      res.status(205).json({
        "status":"success",
        data:objective_data
      })
    } catch (error) {
      res.json({
        err:error
      })
    }
  });

router.delete('/objective/delete/:id',async function (req,res) {  
    try {
      const objective_data = await objective.findByIdAndDelete(req.params.id);
      console.log("delete personal data");
    } catch (error) {
      console.log(error);
    }
  });
  
router.patch('/objective/edit/:id',async function (req,res) {  
    try {
      const objective_data = await objective.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        "status":"success",
        data:objective_data
      })
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;