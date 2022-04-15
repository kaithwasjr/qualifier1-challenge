const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    status :{
        type:Boolean,
        required:true,

    }, 
    UserID :{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email is already present"],
        Validate(value){
            if(validator.isEmail(value)){
                throw new error("invalid Email")

            }
        }
    },
    collegerollnum :{
        type:String,
        required:true,
        unique:[true, "Enrollment no. is already present"]

    },
    numbers:{
        type:String,
        required:true,
       

    },
    alphabet:{
        type:String,
        required:true,
       

    },


})


const Student = new mongoose.model('Student', studentSchema)

module.exports = Student;