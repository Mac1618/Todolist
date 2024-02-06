// Mongoose
import mongoose, { Schema } from 'mongoose';

// Schema
const itemSchema = new Schema(
	{
		title: String,
	},
	{
		timestamps: true,
	}
);

// If Topic collection exist then it will not create a new model
const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);
export default Item;
