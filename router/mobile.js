const express = require('express')
const Mobile = require('../model/mobile')

const router = new express.Router()

router.post('/mobileData', async (req, res) => {
    const mobile = new Mobile(req.body)

    try {
        await mobile.save();
        res.status(201).send({ mobile })
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/mobileData', async (req,res)=>{
    let data = await Mobile.find();
    res.send(data);
})

router.get('/mobileData/:id', async (req,res)=>{
    let data = await Mobile.findOne(req.params);
    const myvar = JSON.stringify(data);
    console.log(myvar.price)
    
    res.send(data);
})

router.put('/mobileData/:id', async (req,res)=>{
    let data = await Mobile.updateOne(
        req.params,
        { $set: req.body }
     );
     res.send(data)
})

router.delete('/mobileData/:id', async (req,res)=>{
    let data = await Mobile.deleteOne(req.params);
    res.send(data)
})

module.exports = router