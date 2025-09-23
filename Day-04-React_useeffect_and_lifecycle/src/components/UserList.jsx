import { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // Runs only once

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name} ({u.email})</li>
          ))}
        </ul>
      )}
    </div>
  );
}
