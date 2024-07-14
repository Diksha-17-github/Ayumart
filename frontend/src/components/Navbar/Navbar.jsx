import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
const Navbar = () => {

  const [menu, setMenu] = useState("Shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <img src={logo} alt=""/>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=> {setMenu("Shop")}}><Link style={{textDecoration: 'none'}}to='/'>Shop</Link>
        {menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("Blog")}}><Link style={{textDecoration: 'none'}}to='/Blog'>Blog</Link>
        {menu==="Blog"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("Products")}}><Link style={{textDecoration: 'none'}}to='/Product'>Products</Link>
        {menu==="Products"?<hr/>:<></>}</li>

      </ul>
      <div className='nav-login-cart'>
        <Link style={{textDecoration: 'none'}} to='/login'><button> Login </button></Link>
        <Link style={{textDecoration: 'none'}}to='/Cart'><img src={cart} alt="" /></Link>

        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
