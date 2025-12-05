import axiosInstance from "../../api/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_SORT = "SET_SORT";
export const SET_SINGLE_PRODUCT = "SET_SINGLE_PRODUCT";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setSort = (sort) => ({
  type: SET_SORT,
  payload: sort,
});

export const setSingleProduct = (product) => ({
  type: SET_SINGLE_PRODUCT,
  payload: product,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));

      const response = await axiosInstance.get("/categories");

      dispatch(setCategories(response.data));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetchState("FETCHING"));

      const { category, filter, sort, limit, offset } = getState().product;

      let query = [];

      if (category) query.push(`category=${category}`);
      if (filter) query.push(`filter=${encodeURIComponent(filter)}`);
      if (sort) query.push(`sort=${sort}`);
      if (limit) query.push(`limit=${limit}`);
      if (offset) query.push(`offset=${offset}`);

      const finalQuery = query.length > 0 ? `?${query.join("&")}` : "";

      const response = await axiosInstance.get(`/products${finalQuery}`);

      const { total, products } = response.data;

      dispatch(setProductList(products));
      dispatch(setTotal(total));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Failed to fetch products:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    dispatch({ type: "SET_SINGLE_PRODUCT", payload: response.data });
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
  }
};
