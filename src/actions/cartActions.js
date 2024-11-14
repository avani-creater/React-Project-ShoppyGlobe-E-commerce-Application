 
export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      ...product, // Include all the other product details
      image: product.images?.[0] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s', // Get the first image or fallback
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId,
  };
};
