
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data from API
    axios
      .get('https://dummyjson.com/products') 
      .then((response) => {
        if (response.data && response.data.products) {
          const sanitizedProducts = response.data.products.map(product => ({
            ...product,
            image: product.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s' // Fallback image
          }));
          setProducts(sanitizedProducts); 
        } else {
          setError('Invalid response format');
        }
        setLoading(false); 
      })
      .catch((error) => {
        setError('Error fetching products'); 
        setLoading(false); 
      });
  }, []); 

  return { products, loading, error }; 
};

export default useFetchProducts;

