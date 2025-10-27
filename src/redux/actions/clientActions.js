export const setUser = (user) => ({ type: "SET_USER", payload: user });
export const clearUser = () => ({ type: "CLEAR_USER" });
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles });
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme });
export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

export const fetchRoles = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;
    if (roles.length > 0) return;
    try {
      dispatch({ type: "SET_FETCH_STATE", payload: "FETCHING" });

      const response = await fetch("/api/roles");
      const data = await response.json();

      dispatch(setRoles(data));
      dispatch({ type: "SET_FETCH_STATE", payload: "FETCHED" });
    } catch (error) {
      dispatch({ type: "SET_FETCH_STATE", payload: "FAILED" });
      console.error("Failed to fetch roles", error);
    }
  };
};
