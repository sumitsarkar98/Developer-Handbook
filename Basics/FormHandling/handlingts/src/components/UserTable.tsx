import { useState } from "react";
import type { UserTableType } from "../types/types";
import { UserServices } from "../services/UserService";

interface IState {
  users: UserTableType[];
}

const UserTable = () => {
  const [userData, setUserData] = useState<IState>({
    users: UserServices.getAllUsers(),
  });

  return (
    <div className="table-wrapper w-100 mb-5">
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {userData.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
