import axiosInstance from "../../api/axiosInstance";
import { setUser } from "./clientActions";

export const loginUser = (email, password, remember) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/login", { email, password });
      console.log("Login response:", response.data);

      const { token, name, email: userEmail, role_id } = response.data;

      const user = { name, email: userEmail, role_id, token };

      dispatch(setUser(user));

      if (remember) {
        localStorage.setItem("token", token);
      }

      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      const message =
        error.response?.data?.message || "Invalid credentials or server error.";
      return { success: false, message };
    }
  };
};
