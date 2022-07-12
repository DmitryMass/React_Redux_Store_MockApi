import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../../Store/Actions/component';

const useItemHook = (id) => {
  //
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const item = cartItem.find((product) => product.id === id);
  //
  //
  const onBtnClick = (e) => {
    e.preventDefault();

    if (item) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart(id));
    }
  };

  return {
    item,
    onBtnClick,
  };
};

export default useItemHook;
