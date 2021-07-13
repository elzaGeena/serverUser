const express = require('express');
const router = express.Router()
const Internal = require('../models/internals')
router.get('/:course',async(req, res) =>{
    console.log(req.params.course)
    try{
        const internals = await Internal.find({course:req.params.course});
        res.json(internals)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res)=>{
    const internal = new Internal({
        course: req.body.course,
        assignmentMarkOutOf: req.body.assignmentMarkOutOf,
        testMarkOutOf: req.body.testMarkOutOf,
        markYOutOf: req.body.markYOutOf,
        markZOutOf: req.body.markZOutOf,
        students: []
    })
    try{
       const i1 = await internal.save();
       res.json(i1)
    }catch(err){
        res.send(err)
    }
})

router.put('/:course',async(req, res) =>{
    try{
        const internals = await Internal.findOneAndUpdate(req.params.course,{
        students : req.body
    }   
    );
        res.json(internals)
    }catch(err){
        res.send('Error'+ err)
    }
})
module.exports = router;