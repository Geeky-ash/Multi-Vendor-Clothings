import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, phone, password, city } = await request.json();

    // Check if user already exists
    const existingUser = await UserModel.findOne({ phone });
    if (existingUser) {
      return Response.json(
        { success: false, message: "User with this phone number already exists" },
        { status: 400 }
      );
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user
    const newUser = new UserModel({
      username,
      phone,
      password: hashedPassword,
      city,
    });
    
    await newUser.save();

    return Response.json(
      { success: true, message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return Response.json(
      { success: false, message: "Error registering user" },
      { status: 500 }
    );
  }
}