import React from 'react'

import './style.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="left">
          <img
            src={require('assets/img/header/header-logo.png')}
            alt="error png"
          />
        </div>
        <div className="mid">
          <div className="item active">Home</div>
          <div className="item">About Us</div>
          <div className="item">Plan</div>
          <div className="item">Investment</div>
          <div className="item">Choose Us</div>
        </div>
        <div className="right">
          <span className="login">Log in</span>
          <button className="signup">Sign up for free</button>
        </div>
      </div>
    </header>
  )
}

export default Header
