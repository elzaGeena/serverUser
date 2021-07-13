const express = require('express');
const router = express.Router()
const Sow = require('../models/sows')
router.get('/:course',async(req, res) =>{
    console.log(req.params.course)
    try{
        const sows = await Sow.findOne({course:req.params.course});
        res.json(sows)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res)=>{
    const sow = new Sow({
        course: req.body.course,
        hours: req.body.hours
    })
    try{
       const s1 = await sow.save();
       res.json(s1)
    }catch(err){
        res.send(err)
    }
})
module.exports = router