interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers(): Promise<{ data: User[]; message: string }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.statusText}`);
  }
  return res.json();
}

async function createUser(
  name: string,
  email: string
): Promise<{ message: string }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });
  if (!res.ok) {
    throw new Error(`Failed to create user: ${res.statusText}`);
  }
  return res.json();
}

async function deleteUser(userid: number): Promise<{ message: string }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userid}`,
    {
      method: "DELETE",
    }
  );
  if (!res.ok) {
    throw new Error(`Failed to delete user: ${res.statusText}`);
  }
  return res.json();
}

export { createUser, fetchUsers, deleteUser };

/* 
This code defines an interface User and three asynchronous functions (fetchUsers, createUser, and deleteUser) for managing users via a REST API in a Next.js application. The interface User ensures that user objects have an id, name, and email.

The fetchUsers function retrieves a list of users by sending a GET request to the API endpoint, and if successful, returns the data in a JSON format. If the request fails, an error is thrown with the response's status text.

The createUser function handles creating new users by sending a POST request with the user's name and email in the request body, formatted as JSON. If the server responds with an error, it throws an exception.

The deleteUser function removes a user based on their userid by sending a DELETE request to the corresponding API endpoint. As with the other functions, if the request fails, an error is thrown.

These functions are exported, making them reusable in other parts of the application, enabling interactions with the backend API for CRUD operations on users.
*/