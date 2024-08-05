import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from "path";

const app = express();
const port = process.env.PORT || 3000;


// MongoDB connection
// mongoose.connect('mongodb://0.0.0.0:27017/database')
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname,
    'public')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app.html'));
});
// Routes (import and use your routes here)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});