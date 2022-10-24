import React from 'react'
import './cover.css'
import { services } from '../../data/Data'
import banner from '../../image/cta-banner.jpg'
import img from './testimonial-1.jpg'
function Cover() {
  return (
    <div className='cover'>
        <div className="grid-3">
            <div className="testimonial">
                <h4>testimonial</h4>
                <hr />
                <div className="testimonialItems">
                    <img src={img} alt="" />
                    <h4>ALAN DOE</h4>
                    <label>CEO & Founder Invision</label>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet. </p>
                </div>
            </div>
            <div className="discount">
                <img src={banner} alt="" />
                <div className="textbanner">
                    <h4>25% DISCOUNT</h4>
                    <h2>SUMMER COLLECTION</h2>
                    <p>Starting 10%</p>
                    <h3>SHOP NOW</h3>
                </div>
            </div>
            <div className="services">
                <h4>Our Services</h4>
                <hr />
                <div className="serverBox">
                {services.map((item,idx)=>(
                     <div className="servesItem" key={idx}>
                        {item.icon}
                        <div className="servesText">
                            <label>{item.name}</label>
                            <p>{item.desc}</p>
                        </div>
                     </div>   
                ))}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cover