var express = require('express');
var router = express.Router();

const experience = require('../Models/experience');


router.post('/experience',async function (req,res) {
  
    try {
      const experience_data = await experience.create(req.body);
  
      res.status(202).json({
        "status":"success",
        data:experience_data
      })
    } catch (error) {
      res.json({
        err:error
      })
    }
  });

router.delete('/experience/delete/:id',async function (req,res) {  
    try {
      const experience_data = await experience.findByIdAndDelete(req.params.id);
      console.log("delete personal data");
    } catch (error) {
      console.log(error);
    }
  });
  
router.patch('/experience/edit/:id',async function (req,res) {  
    try {
      const experience_data = await experience.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        "status":"success",
        data:experience_data
      })
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;