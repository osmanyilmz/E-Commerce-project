const initialState = {
  list: [],
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CARDS":
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
