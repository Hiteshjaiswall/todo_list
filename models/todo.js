// require mongoose to create schema
const mongoose=require("mongoose");
//create schema
const todoschema= new mongoose.Schema({
    tasks:{
        type:String, 
        required:true
    }, 
    date:{
        type:Date, 
        required:true
    },
    catagory:{
        type:String, 
        required:true
    }
});

const ToDo =mongoose.model("ToDo", todoschema );

module.exports=ToDo;