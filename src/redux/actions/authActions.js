import axios from "axios";

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const loginUser = (email, password, remember) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/login", { email, password });
      const { token, user } = response.data;

      dispatch(setUser(user));

      if (remember) {
        localStorage.setItem("token", token);
      }

      return { success: true, user };
    } catch (error) {
      console.error("Login failed:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };
};
