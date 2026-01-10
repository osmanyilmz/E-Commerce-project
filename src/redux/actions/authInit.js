export const initializeAuth = () => {
  return async (dispatch) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) return;

    try {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      const response = await axiosInstance.get("/verify");
      const user = response.data;

      dispatch(setUser(user));

      if (user.token) {
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${user.token}`;
        localStorage.setItem("token", user.token);
      }
    } catch (error) {
      console.error("Token verification failed:", error);
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
      dispatch(clearUser());
    }
  };
};
