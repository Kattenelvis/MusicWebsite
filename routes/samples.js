const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send("hi")
})

router.post('/', (req,res) =>{
    res.send("hi") 
    console.log(req.body)
})

module.exports = router