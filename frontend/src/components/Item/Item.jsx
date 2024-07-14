import './Item.css';
import React from 'react'
import { Link } from 'react-router-dom';
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="price">
          Rs. {props.price}
        </div>
      </div>
    </div>
  )
}

export default Item
