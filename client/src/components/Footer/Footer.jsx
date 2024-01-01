import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            askldjaskldjalkcnmlkwqnmdlksanmcldkasmnlk maslkdmaslkdjmaslkdjaksljdaksldjaksl
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>alskdjaslkjdksaljdaslkjdasnclkasnclkasnclkasnmcklasjd</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">
            Lamastore
          </div>
          <div className="copyright">
            Copyright 2023. All rights reserved
          </div>
        </div>
        <div className="right">
          <img src='/img/payment.png' alt='payment'/>
        </div>
      </div>
    </div>
  )
}

export default Footer