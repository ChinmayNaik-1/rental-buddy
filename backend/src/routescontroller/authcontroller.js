import users from "../models/users.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


export const signup = async (req,res) => {
    try {
        const {name,password} = req.body;
        if ( await users.findOne({name})){
            return res.status(400).json({message:"Username already taken"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const u= await users.create({
            name,
            password:hashedPassword
        })
        return res.status(201).json({message:"created"})
    } catch (error) {
        return res.status(500).json({ message:"internal server error"});
    }
}

export const login = async ( req,res ) => {
    try {
        const {name,password} = req.body;
        const u=await users.findOne({name})
        if (!u) {
            return res.status(400).json({message:"No such Username"})
        }
        if(! await bcrypt.compare(password,u.password)){
            return res.status(400).json({message:"wrong password"})
        }
        const token = jwt.sign (
            {id:u._id , name: u.name},
            process.env.JWT_SECRET
        );
        return res.status(200).json({message:"welcome back user",token})
        
    } catch (error) {
        return res.status(500).json({ message:"internal server error"});
    }
}

export const showusers = async ( req,res ) => {
    const usersdata=await users.find()
    res.status(200).json({usersdata})
}