import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="links">
        <div className="link">Inspire @ 2024</div>
        <div className="link">Terms of Service</div>
        <div className="link">Privacy Policy</div>
        <div className="link">Manage Cookies</div>
      </div>
      <div className="social_media_icons">
        <i class="ri-instagram-line"></i>
        <i class="ri-youtube-fill"></i>
        <i class="ri-facebook-fill"></i>
        <i class="ri-twitter-line"></i>
        <i class="ri-linkedin-fill"></i>
      </div>
    </div>
  )
}

export default Footer