import axiosInstance from "../../api/axiosInstance";
import { setUser, clearUser } from "./clientActions";

export const initializeAuth = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      axiosInstance.defaults.headers.common["Authorization"] = token;

      const response = await axiosInstance.get("/verify");
      const user = response.data;

      dispatch(setUser(user));

      if (user.token) {
        localStorage.setItem("token", user.token);
        axiosInstance.defaults.headers.common["Authorization"] = user.token;
      }

      console.log("User verified successfully:", user);
    } catch (error) {
      console.error("Token verification failed:", error);

      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
      dispatch(clearUser());
    }
  };
};
