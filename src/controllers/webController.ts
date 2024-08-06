import { Request, Response } from 'express';
import User, {IUser} from "../models/user";

export class WebController {

    public async renderAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await User.find();
            res.render('users', { users });
        } catch (err) {
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }

    public async renderUserList(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.userId;
            const respon = await fetch('http://localhost:3000/api/lists/user/'+userId);
            const lists = await respon.json();
            res.render('userList', { lists, userId });
        } catch (err) {
            // @ts-ignore
            res.status(500).json({ error: err.body });
        }
    }

    public async renderUserListItems(req: Request, res: Response): Promise<void> {
        try {
            const listId = req.params.listId;
            console.log(listId)
            const respon = await fetch('http://localhost:3000/api/item/list/'+listId);
            const items = await respon.json();
            console.log(items)
            res.render('items', { items, listId});
        } catch (err) {
            // @ts-ignore
            res.status(500).json({ error: err.message });
        }
    }
}
