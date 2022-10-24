import React from 'react'
import './singleitem.css'
import {AiFillStar , AiOutlineStar} from 'react-icons/ai'
import img from '../../../../image/products/shampoo.jpg'
function SingleItem() {
  return (
    <div className='SingleProduct'>
        <h4 className='title'>Deal Of The Day</h4>
        <hr />
        <div className="Single flex">
            <img src={img} alt="" />
            <div className="SingleText">
                <div className="icons">
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiOutlineStar/></i>
                    <i><AiOutlineStar/></i>
                </div>
                <h4>SHAMPOO, CONDITIONER & FACEWASH PACKS</h4>
                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor</p>
                <div className="price flex">
                    <h5 className='priceNumber'>$150.00</h5>
                    <span>$200.00</span>
                </div>
                <button>ADD TO CART</button>
                <h5>HURRY UP! OFFER ENDS IN:</h5>
                <div className="time flex">
                    <div className="timeFlex">
                        <h5>360</h5>
                        <span>Days</span>
                    </div>
                    <div className="timeFlex">
                        <h5>24</h5>
                        <span>Hours</span>
                    </div>
                    <div className="timeFlex">
                        <h5>59</h5>
                        <span>Min</span>
                    </div>
                    <div className="timeFlex">
                        <h5>00</h5>
                        <span>Sec</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleItem