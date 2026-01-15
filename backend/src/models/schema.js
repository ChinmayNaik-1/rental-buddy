import mongoose from "mongoose";

const schema = mongoose.Schema( {
    image:{type:String, required:true}, //this will be a url admin enters
    name:{type:String, required:true},
    location:{type:String, required:true},
    price:{type:Number, required:true},
    booked:{type:Boolean, required:true}
})

const Bike=mongoose.model("Bike",schema)

export default Bike;