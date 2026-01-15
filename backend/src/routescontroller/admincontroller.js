import Bike from "../models/schema.js"

export async function adGetCards(_,res) {
    try {
        const data = await Bike.find()
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

export async function adCreate(req,res){
    try {
        const {image,name,location,price,booked} = req.body
        const newBike = new Bike({image,name,location,price,booked})
        await newBike.save();
        res.status(200).json({message:"created"})
    } catch (error) {
        res.status(500).json({message:"couldnt create"})
    }
}

export async function adDeleteCard(req,res){
    try {
        await Bike.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"deleted"})
    } catch (error) {
        res.status(500).json({message:"couldnt delete"})
    }
}
export async function adUpdate(req,res){
    try {
        const {image,name,location,price,booked} = req.body
        await Bike.findByIdAndUpdate(req.params.id,{image,name,location,price,booked})
        res.status(200).json({message:"updated"})
    } catch (error) {
        res.status(500).json({message:"couldnt update"})
    }
}

export async function adGetByID(req,res){
    try {
        const card = await Bike.findById(req.params.id)
        res.status(200).json(card)
    } catch (error) {
        res.status(500).json({message:"error in id getting"})
    }
}