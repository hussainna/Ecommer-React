import React from 'react'
import { Nav } from '../../data/Data'
import './hero.css'
import cover from './banner-1.jpg'
function Hero() {
  return (
    <div className='hero'>
        <div className="cont">
            <nav>
                <ul className='C-flex'>
                    {Nav.map((item,index)=>(
                       <li key={index}>
                        <a href={item.path}>{item.link}</a>
                       </li>
                    ))}
                </ul>
            </nav>
            <div className="cover">
                <img src={cover} alt="" />
                <div className="coverText">
                    <h4>Trending item</h4>
                    <h1>Women's latest fashion sale</h1>
                    <h5> starting at $ 20.00 </h5>
                    <button>SHOP NOW</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero