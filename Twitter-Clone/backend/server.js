import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import { connectDB } from './db/db.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();


app.use(express.json());  // to parse JSON data in the request body
app.use(express.urlencoded({ extended: true })); // to parse form data in the request body
app.use(cookieParser());  //to convert cookie string to object and attach it to req.cookies , means we can access cookies in req.cookies

app.use('/api/auth', authRoutes);




app.listen(process.env.PORT || 5000, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});