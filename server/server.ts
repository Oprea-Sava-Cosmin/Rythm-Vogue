import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import deepseekRoutes from './routes/deepseek';

import {connectDB} from './config/database';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import transactionRoutes from './routes/transactionRoutes';
// import  {uploadPhotos} from './config/cloudinary';

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/transactions', transactionRoutes);

connectDB();

// uploadPhotos();

console.log(typeof deepseekRoutes);
// API Routes
app.use('/api/deepseek', deepseekRoutes);

app.get('/', (req, res) => {
    res.send('Rythm Vogue API running');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});