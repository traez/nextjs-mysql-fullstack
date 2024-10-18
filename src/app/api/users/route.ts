import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/dbconnect";

async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    return NextResponse.json({
      message: "Database connected successfully",
      data: rows,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { message: "Database connection failed", error: errorMessage },
      { status: 500 }
    );
  }
}

async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();
    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 }
      );
    }
    const [result] = await pool.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    return NextResponse.json(
      { message: "User created successfully", data: result },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { message: "Failed to create user", error: errorMessage },
      { status: 500 }
    );
  }
}

export { GET, POST };

/* 
This code defines two functions, GET and POST, for handling database operations via a Next.js API route. The functions use MySQL to interact with a users table, leveraging a connection pool (pool) for efficient database access.

The GET function fetches all records from the users table. If the query is successful, it returns a JSON response with the retrieved data and a success message. If an error occurs during the database query, the function catches it and responds with a 500 status, indicating the failure to connect or query the database.

The POST function handles adding new users to the database. It first parses the incoming request to extract name and email. If either field is missing, a 400 response is returned, signaling a bad request. Otherwise, the function executes an INSERT SQL query to store the new user’s data. On success, it returns a 201 status along with the result of the query. If the operation fails, a 500 error response is returned with the error message.

Both functions are exported for use in Next.js API routes, providing basic CRUD functionality for the users table.
*/