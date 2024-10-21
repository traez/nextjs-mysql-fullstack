"use client";
import { useEffect, useState, FormEvent } from "react";
import { toast } from "sonner";
import { fetchUsers, createUser, deleteUser } from "@/lib/handlerUsers";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const { data } = await fetchUsers();
      console.log("Fetched Users:", data);
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { message } = await createUser(name, email);
      toast.success(message);
      setName("");
      setEmail("");
      await fetchUserData();
    } catch (err) {
      console.error("Error creating user:", err);
      toast.error("Failed to create user");
    }
  };

  const handleDelete = async (userid: number) => {
    try {
      const { message } = await deleteUser(userid);
      toast.success(message);
      await fetchUserData();
    } catch (err) {
      console.error("Error deleting user:", err);
      toast.error("Failed to delete user");
    }
  };

  return (
    <main className="h-full bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Awa Ekrebe User Management</h1>
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New User</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add User
            </button>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          {users.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {users.map((user) => (
                <li
                  key={`${user.id}-${user.email}`}
                  className="py-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No users found.</p>
          )}
        </div>
      </div>
    </main>
  );
}

/* 
This code implements a basic User Management page using React and TypeScript, allowing users to be fetched, added, and deleted. It uses useState and useEffect hooks for state management and side effects, respectively, and integrates the sonner toast notification library to display success and error messages.

The component manages three main states: users (an array of user objects), name, and email (for capturing form input values). The fetchUserData function is called within a useEffect to load the list of users when the page is first rendered. It uses the fetchUsers function from an external file (handlerUsers) to retrieve user data from an API, which is then set into the users state.

The handleSubmit function processes the form submission to create a new user. It captures the inputted name and email, calls the createUser function to send a POST request, and displays a success or error toast based on the response. After the user is created, the fetchUserData function is called again to refresh the user list.

Similarly, the handleDelete function deletes a user by sending a request via the deleteUser function, then refreshes the user list after the deletion is confirmed. Toast messages indicate whether the operation was successful or not.

The JSX part of the component includes a form for adding new users and a list that displays the current users. If there are no users, a message is shown.
*/