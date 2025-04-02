import express from 'express';
import {createTask, getTasks, getTaskByID, updateTask, deleteTask} from '../controllers/taskcontroller.js';
import authmiddleware from '../Middleware/authmiddleware.js';

const router=express.Router();

router.post('/tasks',authmiddleware,createTask);
router.get('/tasks',authmiddleware,getTasks);
router.get('/tasks/:id',authmiddleware,getTaskByID);
router.put('/tasks/:id',authmiddleware,updateTask);
router.delete('/tasks/:id',authmiddleware,deleteTask);

export default router;
