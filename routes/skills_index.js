var express = require('express');
var router = express.Router();
const skill = require('../Models/skills');

router.post('/skills',async function (req,res) {
  
    try {
      const skill_data = await skill.create(req.body);
  
      res.status(204).json({
        "status":"success",
        data:skill_data
      })
    } catch (error) {
      res.json({
        err:error
      })
    }
  });

  router.delete('/skills/delete/:id',async function (req,res) {  
    try {
      const skill_data = await skill.findByIdAndDelete(req.params.id);
      console.log("delete personal data");
    } catch (error) {
      console.log(error);
    }
  });
  
  router.patch('/skills/edit/:id',async function (req,res) {  
    try {
      const skill_data = await skill.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        "status":"success",
        data:skill_data
      })
    } catch (error) {
      console.log(error);
    }
  });
  module.exports = router;