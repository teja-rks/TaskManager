import user from '../Models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser=async (req,res)=>{
    try{
        const{name,email,password}=req.body;

        const exitinguser=await user.findOne({email});
        if(exitinguser){
            return res.status(400).json({message:"User already exists"});
        }
        const newuser=new user({name,email,password});
        await newuser.save();
        res.status(201).json({message:"User registered successfully"});
    }
    catch(error){
        res.status(500).json({error:"server.error"});
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user.findOne({ email });  // Renamed variable

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.status(200).json({ token, user: existingUser });
    } catch (error) {
        console.error(error);  // Log the actual error
        res.status(500).json({ error: "Server error" });
    }
};
