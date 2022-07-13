import { useDispatch, useSelector } from 'react-redux';
import {
  filterCategories,
  filterPriceMax,
  filterPriceMin,
} from '../../../../Store/Actions/component';

export const useProductFilter = (setCurrentPage) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const chooseCategory = (category) => {
    dispatch(filterCategories(category));
    setCurrentPage(1);
  };

  return {
    categories,
    chooseCategory,
  };
};
