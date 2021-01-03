/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {
  constructor(url) {
    this.axiosInstance = axios.create({
      baseURL: url,
      headers: { "Content-Type": "application/json" },
    });
  }

  listAll(token) {
    return this.axiosInstance
      .get("/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }

  create(userData, token) {}

  update(userData, userId, token) {}

  delete(userId, token) {}
}

export default new UserService(BASE_URL);
