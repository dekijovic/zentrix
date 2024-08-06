import { Request, Response } from 'express';
import { List, IList } from '../models/list';
import {IItem, Item} from "../models/item";
export class ItemController {
    public async createItem(req: Request, res: Response): Promise<void> {
        try {
            const { name, listId } = req.body;
            let done = false;
            // Create a new list instance
            const newItem: IItem = new Item({
                name,
                listId,
                done
            });

            // Save the list to the database
            const savedItem = await newItem.save();

            // Send response
            res.status(201).json(savedItem);
        } catch (err) {
            // Handle errors
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }
    public async itemDone(req: Request, res: Response): Promise<void> {
        try {

            const itemId = req.params.id;

            const updatedItem = await Item.findByIdAndUpdate(
                itemId,
                { done: true },
                { new: true, runValidators: true }
            );
            if (!updatedItem) {
                res.status(404).json({ message: 'Item not found' });
                return;
            }

            res.status(200).json(updatedItem);
        } catch (err) {
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }

    public async getListItems(req: Request, res: Response): Promise<void> {
        try {
            const listId = req.params.listId;

            // Find all lists by user ID
            const items = await Item.find({ listId });

            if (items.length === 0) {
                res.status(404).json({ message: 'No items found for this list' });
                return;
            }

            res.status(200).json(items);
        } catch (err) {
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }
}