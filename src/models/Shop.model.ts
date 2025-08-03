import mongoose, { Schema, Document } from "mongoose";

export interface IShop extends Document {
  name: string;
  owner: Schema.Types.ObjectId; // Link to the User model
  category: "Groceries" | "Clothes" | "Electronics" | "Stationery";
  address: string;
  city: string;
  imageUrl: string;
  isApproved: boolean;
}

const ShopSchema: Schema<IShop> = new Schema({
    name: { type: String, required: true, trim: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isApproved: { type: Boolean, default: false }, // For admin approval
}, { timestamps: true });

export default mongoose.models.Shop || mongoose.model<IShop>("Shop", ShopSchema);