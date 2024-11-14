import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <h3 className="text-2xl">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-xl">{product.price}</p>
    </div>
  );
};

export default ProductDetail;
