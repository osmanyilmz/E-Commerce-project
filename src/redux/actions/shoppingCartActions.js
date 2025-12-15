export const addToCart = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;

    const existing = cart.find((item) => item.product.id === product.id);

    let updatedCart;

    if (existing) {
      updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, count: item.count + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { count: 1, checked: true, product: product }];
    }

    dispatch({
      type: "SET_CART",
      payload: updatedCart,
    });
  };
};

export const removeFromCart = (productId) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    const updated = cart.filter((item) => item.product.id !== productId);

    dispatch({ type: "SET_CART", payload: updated });
  };
};

export const toggleChecked = (productId) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    const updated = cart.map((item) =>
      item.product.id === productId ? { ...item, checked: !item.checked } : item
    );

    dispatch({ type: "SET_CART", payload: updated });
  };
};

export const updateCount = (productId, change) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    const updated = cart.map((item) =>
      item.product.id === productId
        ? { ...item, count: Math.max(1, item.count + change) }
        : item
    );

    dispatch({ type: "SET_CART", payload: updated });
  };
};

export const clearCart = () => ({
  type: "SET_CART",
  payload: [],
});
0;

export const setPayment = (payment) => ({
  type: "SET_PAYMENT",
  payload: payment,
});
export const setAddress = (address) => ({
  type: "SET_ADDRESS",
  payload: address,
});
