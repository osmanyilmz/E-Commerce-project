const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  order: {
    shippingAddressId: null,
    receiptAddressId: null,
  },
  roles: [],
  theme: "light",
  language: "en",
};

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, user: {} };
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_SHIPPING_ADDRESS":
      return {
        ...state,
        order: {
          ...state.order,
          shippingAddressId: action.payload,
        },
      };

    case "SET_RECEIPT_ADDRESS":
      return {
        ...state,
        order: {
          ...state.order,
          receiptAddressId: action.payload,
        },
      };
    default:
      return state;
  }
}
