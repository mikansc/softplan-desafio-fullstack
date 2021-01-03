import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/";

class AuthService {
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
}

export default new AuthService(BASE_URL);
