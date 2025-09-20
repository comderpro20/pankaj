// src/index.ts

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';

// --- Routers ---
import userRouter from './routes/user.routes';
import videoRouter from './routes/video.routes';
import cartRouter from './routes/cart.routes';
import paymentRouter from './routes/payment.routes'; // Import the new router

// --- Initializations ---
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- API Routes ---
app.use('/api/v1/users', userRouter);
app.use('/api/v1/videos', videoRouter);
app.use('/api/v1/cart', cartRouter);
app.use('/api/v1/payment', paymentRouter); // Use the new router

// --- Server Start ---
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});