import React, { createContext, useState } from 'react';
import all_product from '../components/Assets/productdata';
import CartItems from '../components/CartItems/CartItems';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (ItemID) => {
    setCartItems((prev) => ({ ...prev, [ItemID]: prev[ItemID] + 1 }));
  };

  const removeFromCart = (ItemID) => {
    setCartItems((prev) => ({ ...prev, [ItemID]: prev[ItemID] - 1 }));
  };

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        let itemInfo = all_product.find((product)=>product.id===Number(item));
        totalAmount+=cartItems[item]*itemInfo.price;
      }
    }
    return totalAmount;
  }

  const getTotalCartItems=()=>{
    let totalItems=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totalItems+=cartItems[item];
      }
    } 
    return totalItems;
  }

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount, 
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;