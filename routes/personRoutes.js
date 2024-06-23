
const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async (req,res)=>{
    
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err)
    }
})

router.get('/',async (req,res)=>{
    try{
     const data = await Person.find()
     console.log('data saved');
     res.status(200).json(data);
    }
    catch(error){
        console.log(err)
    }
})

router.get('/:workType' , async(req, res)=>{
    try{

        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager'){
            const response = await Person.find({
                work: workType
            })
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'})
        }

    }
    catch(err){
      res.status(500).json({error : 'Internal server error'})
    }
})

router.put('/:id' , async(req,res)=>{
    try{
        const personId = req.params.id;
        const updatePersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId , updatePersonData,{
            new: true, // return updated document
            runValidators : true //run mongoose validation
        })


        if(!response){
            return res.status(404).json({error : "not found"})
        }
        console.log('data Updated');
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Intenral Server Error'});
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);



        if(!response){
            return res.status(404).json({error : "not found"})
        }
        console.log('data deleted');
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Intenral Server Error'});
    }
})
module.exports = router;