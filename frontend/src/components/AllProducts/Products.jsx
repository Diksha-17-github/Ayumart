import React, { useState } from 'react'
import './Products.css';
import data from '../Assets/productdata'
import { Link } from 'react-router-dom';
import Item from '../../components/Item/Item'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = data.filter((val) =>
    searchTerm === '' || val.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="allProducts">
      <input
        id="searchInput"
        type="text"
        placeholder="Search here..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <h1>All Products</h1>
      <hr />
      <div className="template_Container">
        {filteredProducts.map((item) => (
          <Link key={item.id} style={{ textDecoration: 'none', color: 'black' }} to={`/products/${item.id}`}>
              <Item
                image={item.image}
                id={item.id}
                name={item.name}
                price={item.price}
              />
            </Link>
        ))}
      </div>
      <div className="search">
        <p><Link style={{ textDecoration: 'none', color: 'green'}} to={`/ProductNotFound`}>Couldn't find what you are looking for?</Link></p>
      </div>
    </div>
  )
}

export default Products;

