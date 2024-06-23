const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://leo:leo2001m@cluster0.fqmxuwb.mongodb.net/userdata');

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to server');
})

db.on('error', ()=>{
    console.log('error in connection');
})

db.on('disconnected' , ()=>{
    console.log('disconnected from server')
})