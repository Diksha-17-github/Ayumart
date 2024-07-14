import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../ProductDisplay/ProductDisplay.css';
import { ShopContext } from '../../context/ShopContext';
import productData from '../Assets/productdata'; 

const ProductDisplay = () => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();

  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not available</p>;
  }

  const { name, price, image } = product;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{name}</h1>
      <div className="productdisplay-right-prices">
        Rs. {price}
      </div>
      <button onClick={() => { addToCart(product.id) }}>
        ADD TO CART
      </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
