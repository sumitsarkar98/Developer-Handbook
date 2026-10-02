import React, { useEffect, useState } from "react";
import type { IUser } from "../types/types";
import { UserApiService } from "../services/UserApiService";
interface Istate {
  loading: boolean;
  users: IUser[];
  error: string;
}

const UserFromAPI: React.FC = () => {
  const [state, setState] = useState({
    loading: false,
    users: [] as IUser[],
    error: "",
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    UserApiService.getAllUser()
      .then((res) => setState({ ...state, loading: false, users: res.data }))
      .catch((err) => setState({ ...state, error: err.message }));
  }, []);

  const { loading, users, error } = state;
  return (
    <div className="container-fluid">
      <h1>Data from API</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && users.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserFromAPI;
