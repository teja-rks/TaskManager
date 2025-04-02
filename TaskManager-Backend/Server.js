import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/db.js';
import taskRoutes from './routes/taskroutes.js';
import authroutes from './routes/authroutes.js';

dotenv.config();
console.log("PORT from .env:", process.env.PORT);
console.log("MONGO_URI from .env:", process.env.MONGO_URI);
connectDb();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);
app.use('/api/auth', authroutes);

app.get('/', (req, res) => {
  res.send('Task Manager App is Running.....');
});

const PORT =process.env.PORT ||5000;
app.listen(PORT,()=>console.log('Server is running on port',PORT));