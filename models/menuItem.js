const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    taste : {
        type: String,
        required : true
    },
    is_drink:{
        type : Boolean,
        required : true,
        default : false
    },
    num_sales:{
        type : String,
        required : true,
       dafault : 0
    }
})

// create person model
const menuItem = mongoose.model('MenuItem' , menuSchema);
module.exports = menuItem;