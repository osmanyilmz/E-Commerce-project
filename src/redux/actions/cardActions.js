import axiosInstance from "../../api/axiosInstance";

export const fetchCards = () => async (dispatch) => {
  const res = await axiosInstance.get("/user/card");
  dispatch({ type: "SET_CARDS", payload: res.data });
};

export const addCard = (data) => async (dispatch) => {
  await axiosInstance.post("/user/card", data);
  dispatch(fetchCards());
};

export const updateCard = (data) => async (dispatch) => {
  await axiosInstance.put("/user/card", data);
  dispatch(fetchCards());
};

export const deleteCard = (cardId) => async (dispatch) => {
  await axiosInstance.delete(`/user/card/${cardId}`);
  dispatch(fetchCards());
};
