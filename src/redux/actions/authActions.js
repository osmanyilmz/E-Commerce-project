import axiosInstance from "../../api/axiosInstance";
import { setUser, clearUser } from "./clientActions";

export const loginUser = (email, password, remember) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/login", { email, password });
      const { token, name, email: userEmail, role_id } = response.data;
      const user = { name, email: userEmail, role_id, token };

      dispatch(setUser(user));

      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      if (remember) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message || "Invalid credentials or server error.";
      return { success: false, message };
    }
  };
};
