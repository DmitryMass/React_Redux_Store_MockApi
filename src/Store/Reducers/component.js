import {
  ACTION_CART_ADD,
  ACTION_CART_REMOVE,
  ACTION_CLEAR_EDIT,
  ACTION_PRODUCTS_FETCH,
  ACTION_PRODUCT_CREATE,
  ACTION_PRODUCT_EDIT,
  ACTION_PRODUCT_REMOVE,
  ACTION_PRODUCT_UPDATE,
} from '../Actions/component';

const initialState = {
  products: [],
  cart: [],
  editCurrentProduct: {},
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_PRODUCTS_FETCH:
      return {
        ...state,
        products: payload,
      };
    case ACTION_PRODUCT_CREATE:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case ACTION_PRODUCT_REMOVE:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    case ACTION_PRODUCT_UPDATE:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload.id ? payload : product
        ),
      };
    case ACTION_PRODUCT_EDIT:
      return {
        ...state,
        editCurrentProduct: payload,
      };
    case ACTION_CLEAR_EDIT:
      return {
        ...state,
        editCurrentProduct: (payload = {}),
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
