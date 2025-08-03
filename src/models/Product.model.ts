import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  shop: Schema.Types.ObjectId; // Link to the Shop model
  price: number;
  quantity: number;
  imageUrl: string;
  category: string; // E.g., 'T-Shirt', 'Pant', 'Kurti'
}

const ProductSchema: Schema<IProduct> = new Schema({
    name: { type: String, required: true, trim: true },
    shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);