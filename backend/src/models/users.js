import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : { type:String,required:true,trim:true},
    password : {type:String,required:true,trim:true}
})

const users = mongoose.model("user",userSchema)
export default users;