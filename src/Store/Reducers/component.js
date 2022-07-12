import {
  ACTION_CART_ADD,
  ACTION_CART_REMOVE,
  ACTION_PRODUCTS_FETCH,
} from '../Actions/component';

const initialState = {
  products: [],
  cart: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_PRODUCTS_FETCH:
      return {
        ...state,
        products: payload,
      };
    case ACTION_CART_ADD:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...state.products.find((product) => product.id === payload),
            quantity: 1,
          },
        ],
      };
    case ACTION_CART_REMOVE:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
