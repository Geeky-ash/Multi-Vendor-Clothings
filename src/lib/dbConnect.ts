// src/lib/dbConnect.ts

// This is a temporary file for debugging.
// It bypasses the database connection.

async function dbConnect(): Promise<void> {
  console.log("DATABASE CONNECTION DISABLED FOR TESTING.");
  return;
}

export default dbConnect;