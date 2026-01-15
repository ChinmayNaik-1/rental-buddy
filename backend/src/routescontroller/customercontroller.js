import Bike from "../models/schema.js"

export async function getCards(req,res) {
    try {
        const data = await Bike.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

export async function updateState(req,res){
    try {
        const {booked} = req.body
        if (booked === false){
            return res.status(403).json({message:"cant change you dont have privilages"});
        }
        await Bike.findByIdAndUpdate(req.params.id,{booked});
        res.status(200).json({message:"updated booking"})
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

export async function getById(req,res){
    try {
        const card = await Bike.findById(req.params.id)
        res.status(200).json(card)
    } catch (error) {
        res.status(500).json({message:"error in id getting"})
    }
}


export async function filters(req,res) {
    try {
        const search = req.query.search || ""
        let filter={}
        if (search.trim() != "")
        {
            filter = {
                $or:[
                    {name : {$regex:search , $options:"i"}},
                    {location : {$regex:search , $options:"i"}}
                ]
            }
            
            const data= await Bike.find(filter);
            res.status(200).json(data);
        }
        else
        {
            const data = await Bike.find()
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(500).json({message:"error filtering"})
    }
}