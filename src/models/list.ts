import mongoose, { Document } from 'mongoose';

export interface IList extends Document {
    name: string;
    userId: mongoose.Types.ObjectId;
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User'},
});

export const List = mongoose.model<IList>('List', userSchema);
