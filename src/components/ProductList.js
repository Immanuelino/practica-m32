// src/components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const productStatus = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (productStatus === 'succeeded') {
    content = products.map(product => (
      <ProductItem key={product.id} product={product} />
    ));
  } else if (productStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {content}
      </div>
    </div>
  );
};

export default ProductList;
