import React from 'react'
import './Hero.css';
import wallpaper from '../Assets/wallpaper.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Discover Natural Healing: </h2>
        <p>Boost your immunity with Ayurveda. <br />
          Ayurvedic Solutions for Every Disease</p>
        <Link style={{textDecoration: 'none'}} to={`/Product`}>
        <div className="hero-latest-btn">
          <span>Search</span>
        </div>
        </Link>
      </div>
      <div className='hero-right'>
        <img src={wallpaper} alt="" />
      </div>
    </div>
  )
}

export default Hero
