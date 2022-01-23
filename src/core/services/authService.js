import api from "../utils/httpUtils";
import TokenService from "./tokenService";

const login = (username, password) =>
  api
    .post("/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => JSON.parse(localStorage.getItem("user"));

const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
