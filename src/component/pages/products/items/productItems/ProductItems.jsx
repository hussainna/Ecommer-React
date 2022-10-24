import React from 'react'
import { ProductsData } from '../../../../data/Data'
import './productsiten.css'
function ProductItems() {
  return (
    <div className='ProductItems'>
        <div className="cont">
            <div className="grid-3">
                <div className="grid-item">
                   <h3>New Arrivals</h3>
                   <hr />
                </div>
                <div className="grid-item">
                   <h3>Trending</h3>
                   <hr />
                </div>
                <div className="grid-item">
                   <h3>Top Rated</h3>
                   <hr/>
                </div>
            </div>
            <div className="itemsBody grid-3">
                {ProductsData.map((item,idx)=>(
                    <div className="box flex" key={idx}>
                        <img src={item.img} alt="" />
                        <div className="boxText">
                            <label>{item.name}</label>
                            <p>{item.type}</p>
                            <div className="boxPrice flex">
                                <h5>${item.price}</h5>
                                <span>${item.oldPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductItems