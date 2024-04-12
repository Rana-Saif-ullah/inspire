import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar_main' >
        <div className="nav_logo">
            <img src="./images/Logo.png" alt="Logo" />
        </div>
        <div className="nav_icons">
            <div className="nav_cart_item_number">
                <span>01</span>
            </div>
            <div className="nav_icon">
                <img src="./images/cartIcon.png" alt="cartIcon" />
            </div>
        </div>
    </div>
  )
}

export default Navbar