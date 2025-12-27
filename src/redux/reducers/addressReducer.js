const initialState = {
  list: [],
};

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ADDRESSES":
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
