import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users");
        setUsers(res.data);
      } catch (err) {
        console.log("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div key={user._id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;