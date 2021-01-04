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
      .then((response) => response.data);
  }

  find(userId, token) {
    return this.axiosInstance
      .get(`/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data);
  }

  create(userData, token) {
    return this.axiosInstance
      .post("/", userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.status)
      .catch((error) => error);
  }

  update(userData, userId, token) {
    return this.axiosInstance
      .put(`/${userId}`, userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.status);
  }

  delete(userId, token) {
    return this.axiosInstance
      .delete(`/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.status);
  }
}

export default new UserService(BASE_URL);
