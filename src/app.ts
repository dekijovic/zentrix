import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import apiRoutes from "./routes/api";
import webRoutes from "./routes/web";
import dotenv from 'dotenv';
import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || '';

// MongoDB connection
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Serve static files from the 'public' folder
// app.use(express.static(path.join(__dirname,
//     'public')));

app.use('/api/', apiRoutes)
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});