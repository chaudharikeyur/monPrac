const express = require("express");
const app = express();
const db = require('./db');
const bodyParser = require('body-parser')
require('dotenv').config();
app.use(bodyParser.json());

// const Person = require('./models/person');


const Menu = require('./models/menuItem');

app.get('/', function(req,res){
    res.send("yo boi we r on wave");
})

// app.post('/person', async (req,res)=>{
    
//     try{
//         const data = req.body;
//         const newPerson = new Person(data);
//         const response = await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err)
//     }







//     // newPerson.save((error , person)=>{
//     //     if(error){
//     //     console.log("error saving perosn");
//     //     res.status(500).res("failed bro")
//     // }
//     // else{
//     //     res.status(200).res("created bro")
//     // }
// })

// app.get('/person',async (req,res)=>{
//     try{
//      const data = await Person.find()
//      console.log('data saved');
//      res.status(200).json(data);
//     }
//     catch(error){
//         console.log(err)
//     }
// })

// app.post('/menu' , async (req, res)=>{
//     try{
//         const data = req.body;
//         const newItem = new Menu(data);
//         const response = await newItem.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err)
//     }



// })

// app.get('/menu' ,async (req,res)=>{

//     try{
//         const data = await Menu.find()
//         console.log('data saved');
//         res.status(200).json(data);
//        }
//        catch(error){
//            console.log(err)
//        }

//     // const data =  menuItem.find()
//     // console.log('data saved');
//     // res.status(200).json(data);
// })


// app.get('/person/:workType' , async(req, res)=>{
//     try{

//         const workType = req.params.workType;
//         if(workType == 'chef' || workType == 'manager'){
//             const response = await Person.find({
//                 work: workType
//             })
//             console.log('response fetched');
//             res.status(200).json(response);
//         }
//         else{
//             res.status(404).json({error: 'Invalid work type'})
//         }

//     }
//     catch(err){
//       res.status(500).json({error : 'Internal server error'})
//     }
// })

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu' , menuRoutes);

app.listen(3000);