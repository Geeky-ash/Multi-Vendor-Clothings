import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // If we have a connection, don't connect again
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DATABASE_URL || "", {});

    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);

    // Gracefully exit the process
    process.exit(1);
  }
}

export default dbConnect;