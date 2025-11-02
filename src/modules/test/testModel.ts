import mongoose, { Schema } from 'mongoose';
import { ITest } from './testInterface';


const testSchema = new Schema<ITest>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});


export const Test = mongoose.model<ITest>('Test', testSchema);
