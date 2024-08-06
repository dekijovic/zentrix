import { Request, Response } from 'express';
import User, {IUser} from "../models/user";
import {List} from "../models/list";

export default class UserController {

    public async get(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id;

            // Find user by ID
            const user = await User.findById(userId);

            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }

            // Send response
            res.status(200).json(user);
        } catch (err) {
            // Handle errors
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            // Find all users
            const users = await User.find();

            // Send response
            res.status(200).json(users);
        } catch (err) {
            // Handle errors
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }
    public async create(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, age, password, address } = req.body;

            // Create a new user instance
            const newUser: IUser = new User({
                name,
                email,
            });

            // Save the user to the database
            const savedUser = await newUser.save();

            // Send response
            res.status(201).json(savedUser);
        } catch (err) {
            // Handle errors
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }

}