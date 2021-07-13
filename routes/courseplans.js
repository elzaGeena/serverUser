const express = require('express');
const router = express.Router()
const Courseplan = require('../models/courseplans')
router.get('/:course',async(req, res) =>{
    console.log(req.params.course)
    try{
        const courseplans = await  Courseplan.find({course:req.params.course});
        
        res.json(courseplans)
    }catch(err){
        res.send('Error' + err)
    }
})
router.post('/', async(req,res)=>{
    const courseplan = new Courseplan({
        course: req.body.course,
        topics: req.body.topics,
        module: req.body.module
    })
    try{
       const cp1 = await courseplan.save();
       res.json(cp1)
    }catch(err){
        res.send(err)
    }
})
module.exports = router;