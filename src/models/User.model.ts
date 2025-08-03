import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  phone: string;
  password?: string;
  city: string;
  role: "customer" | "vendor" | "admin";
}

const UserSchema: Schema<IUser> = new Schema(
  {
    username: { 
      type: String, 
      required: [true, "Username is required"] 
    },
    phone: { 
      type: String, 
      required: [true, "Phone number is required"], 
      unique: true,
      trim: true,
    },
    password: { 
      type: String,
      required: [true, "Password is required"]
    },
    city: { 
      type: String, 
      required: true 
    },
    role: { 
      type: String, 
      enum: ["customer", "vendor", "admin"], 
      default: "customer" 
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

// Ensure the model is not re-compiled if it already exists
export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);