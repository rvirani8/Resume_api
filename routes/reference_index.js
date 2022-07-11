var express = require('express');
var router = express.Router();


const reference = require('../Models/reference');

router.post('/reference',async function (req,res) {
  
    try {
      const reference_data = await reference.create(req.body);
  
      res.status(206).json({
        "status":"success",
        data:reference_data
      })
    } catch (error) {
      res.json({
        err:error
      })
    }
});

router.delete('/reference/delete/:id',async function (req,res) {  
  try {
    const reference_data = await reference.findByIdAndDelete(req.params.id);
    console.log("delete personal data");
  } catch (error) {
    console.log(error);
  }
});

router.patch('/reference/edit/:id',async function (req,res) {  
  try {
    const reference_data = await reference.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
      "status":"success",
      data:reference_data
    })
  } catch (error) {
    console.log(error);
  }
});

  module.exports = router;