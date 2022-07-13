import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from '../../Components/Api/component';

// Main action
export const ACTION_PRODUCTS_FETCH = 'ACTION_PRODUCTS_FETCH';
export const ACTION_PRODUCT_CREATE = 'ACTION_PRODUCT_CREATE';
export const ACTION_PRODUCT_REMOVE = 'ACTION_PRODUCT_REMOVE';
export const ACTION_PRODUCT_UPDATE = 'ACTION_PRODUCT_UPDATE';
export const ACTION_PRODUCT_EDIT = 'ACTION_PRODUCT_EDIT';
export const ACTION_CLEAR_EDIT = 'ACTION_CLEAR_EDIT';
// Cart action
export const ACTION_CART_ADD = 'ACTION_CART_ADD';
export const ACTION_CART_REMOVE = 'ACTION_CART_REMOVE';

export function fetchProducts() {
  return async (dispatch) => {
    const productList = await getAllProducts();

    dispatch({ type: ACTION_PRODUCTS_FETCH, payload: productList });
  };
}

export function addProduct(product) {
  return async (dispatch) => {
    if (product.id) {
      const updateCurrentProduct = await updateProduct(product.id, product);
      dispatch({ type: ACTION_PRODUCT_UPDATE, payload: updateCurrentProduct });
    } else {
      const newProduct = await createProduct(product);
      dispatch({ type: ACTION_PRODUCT_CREATE, payload: newProduct });
    }
  };
}

export function removeProduct(id) {
  return async (dispatch) => {
    const removeProduct = await deleteProduct(id);

    dispatch({ type: ACTION_PRODUCT_REMOVE, payload: removeProduct.id });
  };
}

export function editProduct(product) {
  return { type: ACTION_PRODUCT_EDIT, payload: product };
}

export function clearEditProduct(product) {
  return { type: ACTION_CLEAR_EDIT, payload: product };
}

// Add Cart
export function addToCart(product) {
  return { type: ACTION_CART_ADD, payload: product };
}

export function removeFromCart(id) {
  return { type: ACTION_CART_REMOVE, payload: id };
}
