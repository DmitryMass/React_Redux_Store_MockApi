import { useSelector } from 'react-redux';

const useProductHook = (currentPage, setCurrentPage, productPerPage) => {
  const productList = useSelector((state) => state.products);

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;

  const currentProduct = productList.slice(firstProductIndex, lastProductIndex);

  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  return {
    productList,
    pagination,
    productList,
    currentProduct,
  };
};

export default useProductHook;
