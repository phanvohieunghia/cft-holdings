import React from 'react'

import './style.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="img">
          <img src={require('assets/img/footer/footer-logo.png')} alt="" />
        </div>
        <div className="title">
          © 2021 - 2022 cft.holdings. All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
