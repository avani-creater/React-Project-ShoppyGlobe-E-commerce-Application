import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-900 p-4 text-white flex justify-between items-center">
   <img src='https://thumbs.dreamstime.com/b/shopping-bag-logo-icon-design-vector-342398288.jpg ' className='w-16 h-16' alt='shoping logo' />
      <Link to="/" className="text-xl font-semibold font-serif">ShoppyGlobe</Link>
      <Link to="/cart" className="relative">
        <div className='text-orange-700 w-24 bg-slate-100 text-center font-semibold rounded shadow-lg shadow-cyan-500/50 .. flex items-center'>
        <span className='px-3'>Cart</span>
        <span><img src='https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small_2x/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg' className='w-20 h-10 bg-red-400' alt='cart logo' /></span>
        </div>  
      </Link>
    </header>
  );
};

export default Header;
