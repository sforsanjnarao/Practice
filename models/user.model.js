// const { default: mongoose } = require("mongoose");

const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dataAssociation');
 
const userSchema=mongoose.Schema({
    username:{
        type:String
    },
    email:String,
    age:Number,
    post:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }
    ]

})

const userModel=mongoose.model('User',userSchema)
module.exports=userModel



