import { getAllProducts } from '../../Components/Api/component';

// Main action
export const ACTION_PRODUCTS_FETCH = 'ACTION_PRODUCTS_FETCH';
// Cart action
export const ACTION_CART_ADD = 'ACTION_CART_ADD';
export const ACTION_CART_REMOVE = 'ACTION_CART_REMOVE';

export function fetchProducts() {
  return async (dispatch) => {
    const productList = await getAllProducts();

    dispatch({ type: ACTION_PRODUCTS_FETCH, payload: productList });
  };
}

// Add Cart
export function addToCart(product) {
  return { type: ACTION_CART_ADD, payload: product };
}

export function removeFromCart(id) {
  return { type: ACTION_CART_REMOVE, payload: id };
}
