
const express = require('express');
const router = express.Router();
const Menu = require('./../models/menuItem');



router.post('/' , async (req, res)=>{
    try{
        const data = req.body;
        const newItem = new Menu(data);
        const response = await newItem.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err)
    }



})

router.get('/' ,async (req,res)=>{

    try{
        const data = await Menu.find()
        console.log('data saved');
        res.status(200).json(data);
       }
       catch(error){
           console.log(err)
       }

    // const data =  menuItem.find()
    // console.log('data saved');
    // res.status(200).json(data);
})


module.exports = router;