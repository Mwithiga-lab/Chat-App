import { useState } from "react";

const dummyUsers = [
  { id: 1, name: "Alice", status: "online" },
  { id: 2, name: "Bob", status: "offline" },
  { id: 3, name: "Carol", status: "online" },
];

export default function UserTable() {
  const [users, setUsers] = useState(dummyUsers);

  const handleDelete = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.status}</td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}