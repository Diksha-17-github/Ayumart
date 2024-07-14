import React, { useContext, useState } from 'react';
import './CartItems.css';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../../components/Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  const [userord, setUserord] = useState({
    product: "",
    title: "",
    price: "",
    quantity: "",
    total: "",
    remove: ""
});

const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserord({
        ...userord,
        [name]: value,
    });
}

const PostData = async (e) => {
  e.preventDefault();

  // Create an array to store product details from the cart
  const cartData = all_product
    .filter((e) => cartItems[e.id] > 0)
    .map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: cartItems[product.id],
    }));

  // Make a POST request to send the cart data to the backend
  const res = await fetch("http://localhost:5000/api/auth/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartData,
    }),
  });

  // Handle the response
  const data = await res.json();
  if (res.status === 422 || !data) {
    window.alert("Invalid");
    console.log("Invalid");
  } else {
    window.alert("Cart ready");
    console.log("Cart ready");
  }
};

  return (
    <div className='cartItems'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <span>{e.name}</span>
                <span>Rs. {e.price}</span>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <span>Rs. {e.price * cartItems[e.id]}</span>
                <img className='cartItems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItems-total-items">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-items">
              <h3>Total</h3>
              <h3>Rs. {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button type='submit' onClick={PostData}><Link style={{ textDecoration: 'none', color: 'white'}} to={`/checkout`}>Proceed to Buy</Link></button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
