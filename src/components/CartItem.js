
import React from 'react';
const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center mb-4 shadow-md">
      <img 
        src={item.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s'} 
        alt={item.title} 
        className="w-16 h-16 object-cover" 
      />
      <div>
        <h4 className='text-lg italic font-semibold text-rose-950'>{item.title}</h4>
        <p className='text-yellow-600 italic'>{item.description}</p>
        <p className='text-cyan-600 font-bold'>${item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;

