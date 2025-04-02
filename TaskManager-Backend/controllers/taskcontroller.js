import Task from '../Models/Task.js';

export const createTask=async(req,res)=>{
    try{
        const{title,description,status}=req.body;
        const newTask=new Task({title,description,status,user:req.user._id});
        await newTask.save();
        res.status(201).json(Task);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};

export const getTasks=async(req,res)=>{
    try{
        const Tasks=await Task.find({user:req.user._id});
        res.status(200).json(Tasks);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};

export const getTaskByID=async(req,res)=>{ 
    try{
        const task=await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({message:'Task not found'});
        }
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};

export const updateTask=async(req,res)=>{
    try{
        // const {title,description,completed}=req.body;
        const task=await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({message:'Task not found'});
        }
        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTask);
    }
    catch{
        res.status(500).json({error:error.message});
    }
};

export const deleteTask=async (req,res)=>{
    try{
        const Task=await Task.findBy(req.params.id);
        if(!Task){
            return res.status(404).json({message:'Task not found'});
        }
        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        await Task.deleteOne();
        res.status(200).json({message:'Task deleted successfully'});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};