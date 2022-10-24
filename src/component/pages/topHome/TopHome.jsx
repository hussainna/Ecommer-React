import React from 'react'
import {AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import './tophome.css'
function TopHome() {
  return (
    <section className="TopHome">
        <div className='cont S-flex'>
           <div className="topIcons">
              <i><FaFacebook/></i>
              <i><AiOutlineTwitter/></i>
              <i><AiOutlineInstagram/></i>
              <i><AiFillLinkedin/></i>
            </div>
            <span>Free Shipping This Week Order Over - $55 </span>
          <div className="topButtons">
              <button>USD $</button>
              <button>ENGLISH</button>
          </div>
    </div>
    </section>
  )
}

export default TopHome