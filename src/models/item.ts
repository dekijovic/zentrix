import mongoose, { Document } from 'mongoose';

export interface IItem extends Document {
    name: string;
    listId: mongoose.Types.ObjectId;
    done: boolean;
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    listId: { type: mongoose.Types.ObjectId, required: true, ref: 'List'},
    done: { type: Boolean, required: false },
});

export const Item = mongoose.model<IItem>('Item', userSchema);
