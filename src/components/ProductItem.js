

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Get the items from the cart using useSelector
  const cartItems = useSelector((state) => state.cart.items);

  // Check if the product is already in the cart
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      setIsButtonDisabled(true);  // Disable the button immediately
      dispatch(addToCart(product));

      // Re-enable the button after 1 second
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 1000); // 1 second delay
    }
  };


  const imageUrl = product.images && product.images.length > 0 ? product.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s'; // Fallback image
console.log("product details", product);
  return (
    <div className="border p-4 shadow-md">
      <img
        src={imageUrl}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <h3 className="text-lg italic font-semibold text-rose-950">{product.title}</h3>
      <p className='text-yellow-600 italic'>{product.description}</p>
      <p className="text-cyan-600 font-bold">${product.price}</p>

      <button
        onClick={handleAddToCart}
        disabled={isButtonDisabled}
        className={`mt-2 py-2 px-4 rounded ${isInCart ? 'bg-green-500' : 'bg-blue-500'} text-white ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isInCart ? (
          <span>✔ Added to Cart</span>
        ) : (
          'Add to Cart'
        )}
      </button>
    </div>
  );
};

export default ProductItem;

