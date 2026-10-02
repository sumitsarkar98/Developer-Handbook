import axios from "axios";
export class UserApiService {
  private static BaseURL: string = "https://jsonplaceholder.typicode.com/";

  public static getAllUser() {
    let UserURL: string = `${this.BaseURL}/users`;
    return axios.get(UserURL);
  }
}
