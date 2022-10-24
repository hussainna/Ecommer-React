import React from 'react'
import { CategoriesData } from '../../../../data/Data'
import './categories.css'
function Categories() {
  return (
    <div className='categories'>
        <h4>CATEGORIES</h4>
        {CategoriesData.map((item,idx)=>(
            <div className="categoriesItem S-flex" key={idx}>
                <div className="title flex">
                <img src={item.img} alt="" />
                <label>{item.name}</label>
                </div>
                {item.icons}
            </div>
        ))}
    </div>
  )
}

export default Categories