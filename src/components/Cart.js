
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { removeFromCart } from '../actions/cartActions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items || []); 
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-4">
      {cartItems.length === 0 ? (
        <div className="text-center p-4">
          <h2 className="text-xl font-semibold text-sky-700">Oops! Your cart is empty</h2>
          <p className='text-teal-600'>Looks like you haven't added anything yet. Start shopping and fill it up!</p>
          <a href="/" className="text-amber-600 hover:underline">Go to Shop</a>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <CartItem item={item} />
              <button 
                onClick={() => handleRemoveItem(item.id)} 
                className="bg-red-500 text-white p-2 rounded ml-4" >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
