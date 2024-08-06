import { Request, Response } from 'express';
import { List, IList } from '../models/list';
import {IItem, Item} from "../models/item";
export class ListController {
    public async create(req: Request, res: Response): Promise<void> {
        try {
            const { name, userId } = req.body;

            // Create a new list instance
            const newList: IList = new List({
                name,
                userId
            });

            // Save the list to the database
            const savedList = await newList.save();

            // Send response
            res.status(201).json(savedList);
        } catch (err) {
            // Handle errors
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }

    public async getListById(req: Request, res: Response): Promise<void> {
        try {
            const listId = req.params.id;

            // Find list by ID
            const list = await List.findById(listId).populate('userId');

            if (!list) {
                res.status(404).json({ message: 'List not found' });
                return;
            }

            // Send response
            res.status(200).json(list);
        } catch (err) {
            // Handle errors
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }

    public async getAllLists(req: Request, res: Response): Promise<void> {
        try {
            const lists = await List.find().populate('userId');

            res.status(200).json(lists);
        } catch (err) {
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }

    public async getUserLists(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.userId;

            // Find all lists by user ID
            const lists = await List.find({ userId });

            if (lists.length === 0) {
                res.status(404).json({ message: 'No lists found for this user' });
                return;
            }

            res.status(200).json(lists);
        } catch (err) {
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }
}