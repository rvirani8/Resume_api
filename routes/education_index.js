var express = require('express');
var router = express.Router();

const education = require('../Models/education');

router.post('/education',async function (req,res) { 
    try {
      const education_data = await education.create(req.body);
      res.status(201).json({
        "status":"success",
        data:education_data
      })
    } catch (error) {
      res.json({
        err:error
      })
    }
  });
router.get('/educationview',async function (req,res) {
  try {
    const education_data = await education.find(req.body);
    res.status(200).json({
      "status": "success",
      data:education_data
    })
  } catch (error) {
    res.json({
      err:error
    })
  }
  
})
  
router.delete('/education/delete/:id',async function (req,res) {  
  try {
    const education_data = await education.findByIdAndDelete(req.params.id);
    console.log("delete personal data");
  } catch (error) {
    console.log(error);
  }
});

router.patch('/education/edit/:id',async function (req,res) {  
  try {
    const education_data = await education.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
      "status":"success",
      data:education_data
    })
  } catch (error) {
    console.log(error);
  }
});

  module.exports = router;