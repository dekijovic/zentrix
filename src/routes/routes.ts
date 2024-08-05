
import express from 'express';
import User from '../models/user';
import path from "path";

const router = express.Router();
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);

    } catch (error: any) {
        res.status(400).json({
            error: error.message });
    }
});

export default router;