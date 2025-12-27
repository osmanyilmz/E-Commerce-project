import axiosInstance from "../../api/axiosInstance";

export const fetchAddresses = () => async (dispatch) => {
  const res = await axiosInstance.get("/user/address");
  dispatch({ type: "SET_ADDRESSES", payload: res.data });
};

export const addAddress = (data) => async (dispatch) => {
  await axiosInstance.post("/user/address", data);
  dispatch(fetchAddresses());
};

export const updateAddress = (data) => async (dispatch) => {
  await axiosInstance.put("/user/address", data);
  dispatch(fetchAddresses());
};

export const deleteAddress = (id) => async (dispatch) => {
  await axiosInstance.delete(`/user/address/${id}`);
  dispatch(fetchAddresses());
};
