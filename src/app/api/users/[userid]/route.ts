import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/dbconnect";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { userid: string } }
) {
  try {
    const userid = params.userid;
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [
      userid,
    ]);
    return NextResponse.json(
      { message: "User deleted successfully", data: result },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { message: "Failed to delete user", error: errorMessage },
      { status: 500 }
    );
  }
}

/* 
This code defines a DELETE function that handles deleting a user from a database in a Next.js API route. It uses NextRequest and NextResponse to handle the request and response.

When a DELETE request is made, the userid is extracted from the request parameters (params.userid). The code then runs a SQL DELETE query using a MySQL connection pool (pool.query), where the user with the matching id is removed from the users table. If the deletion is successful, a JSON response is returned with a success message and the query result, along with a 200 HTTP status.

If an error occurs, it catches the exception and returns an error message with a 500 status, indicating a server error. The error message is either the error's message or a default "Unknown error occurred" if the error object is not an instance of Error. This function is intended for use in a Next.js API route to handle user deletion in a MySQL database.
*/
