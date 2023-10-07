import mongoose, { Schema,model } from "mongoose";

const userSchema=Schema({
    Firstname:{
        type:String,
        required:[true,"Firstname is required"],
 
    },
    Lastname:{
        type:String,
        required:[true,"Lastname is required"]
    },
    email:{
        type:String,
        unique:[true,'Email already exists'],
        required:[true,"email is required"]
    },
    phone:{
        type:Number,
        required:[true,"Phone_no is required"],

    }
})

 const registerform=mongoose.model('formDatas',userSchema)
 export default registerform