import React from 'react';  
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;


