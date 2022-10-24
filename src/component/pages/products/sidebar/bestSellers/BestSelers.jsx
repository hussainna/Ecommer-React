import React from 'react'
import { BestSellersData } from '../../../../data/Data'
import './bestsellers.css'
function BestSelers() {
  return (
    <div className='BestSelers '>
            <h4>BEST SELLERS</h4>
            {BestSellersData.map((item,idx)=>(
                <div className="box flex" key={idx}>
                    <img src={item.img} alt="" />
                    <div className="boxText">
                        <label>{item.name}</label>
                        <div className="icons">
                            {item.icons}
                        </div>
                        
                        <div className="price flex">
                            <span>${item.oldPrice}</span>
                            <h5>${item.price}</h5>
                        </div>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default BestSelers