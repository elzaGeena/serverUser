const express = require('express');
const router = express.Router()
const Classwork = require('../models/classworks')
router.get('/:course',async(req, res) =>{
    console.log(req.params.course)
    try{
        const classworks = await Classwork.find({course:req.params.course});
        res.json(classworks)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res)=>{
    const ict = new Ict({
        course: req.body.course,
        type: req.body.type,
        date: req.body.date,
        day: req.body.day,
        hour: req.body.hour,
        noOfStudents: req.body.noOfStudents,
        instructionMode: req.body.instructionMode,
        topics: req.body.topics,
        remarks: req.body.remarks
    })
    try{
       const i1 = await ict.save();
       res.json(i1)
    }catch(err){
        res.send(err)
    }
})
module.exports = router;