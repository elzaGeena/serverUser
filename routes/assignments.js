const express = require('express');
const router = express.Router();
const Assignment = require('../models/assignments')
router.get('/:course',async(req, res) =>{
    console.log(req.params.course)
    try{
        const assignments = await Sow.find({course:req.params.course});
        res.json(assignments)
    }catch(err){
        res.send('Error' + err)
    }
})
router.post('/', async(req,res)=>{
    const assignment = new Assignment({
        course: req.body.course,
        announcementDate: req.body.announcementDate,
        submissionDate: req.body.submissionDate,
        submissionTime: req.body.submissionTime,
        assignmentStatement: req.body.assignmentStatement,
        courseOutcome: req.body.courseOutcome,
        rbtl: req.body.rbtl,
        pi: req.body.pi
    })
    try{
       const as1 = await assignment.save();
       res.json(as1)
    }catch(err){
        res.send(err)
    }
})
module.exports = router;