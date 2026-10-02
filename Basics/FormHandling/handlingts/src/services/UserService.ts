import type { UserTableType } from "../types/types";

export class UserServices {
  private static users: UserTableType[] = [
    { id: 1, name: "sumit", age: 27 },
    { id: 2, name: "koushik", age: 21 },
    { id: 3, name: "ratul", age: 24 },
    { id: 4, name: "pankaj", age: 29 },
  ];

  public static getAllUsers() {
    return this.users;
  }
}
