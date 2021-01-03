import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/";

class UserService {
  constructor(url) {
    this.axiosInstance = axios.create({
      baseURL: url,
      headers: { "Content-Type": "application/json" },
    });
  }

  login(username, password) {
    return this.axiosInstance
      .post(
        "/login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        return response.headers.authorization.split(" ")[1];
      });
  }

  authenticated(token) {
    return this.axiosInstance
      .get("users/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }

  listAll(token) {
    return this.axiosInstance
      .get("/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }

  create(userData, token) {
    return axios
      .post(this.BASE_URL, userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }

  update(userData, userId, token) {
    return axios
      .put(`${this.BASE_URL}/${userId}`, userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }

  delete(userId, token) {
    return axios
      .delete(`${this.BASE_URL}/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new UserService(BASE_URL);
