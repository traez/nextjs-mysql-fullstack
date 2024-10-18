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
  console.log(users);

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
        <h1 className="text-3xl font-bold text-center mb-8">User Management</h1>
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
