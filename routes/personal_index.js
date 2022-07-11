var express = require('express');
var router = express.Router();

const personal = require('../Models/personal_details');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/personal_details',async function (req,res) {  
  try {
    const personal_data = await personal.create(req.body);

    res.status(200).json({
      "status":"success",
      data:personal_data
    })
  } catch (error) {
    res.json({
      err:error
    })
  }
});

router.delete('/personal_details/delete/:id',async function (req,res) {  
  try {
    const personal_data = await personal.findByIdAndDelete(req.params.id);
    console.log("delete personal data");
  } catch (error) {
    console.log(error);
  }
});

router.patch('/personal_details/edit/:id',async function (req,res) {  
  try {
    const personal_data = await personal.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
      "status":"success",
      data:personal_data
    })
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
