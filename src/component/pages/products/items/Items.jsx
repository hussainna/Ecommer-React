import React from 'react'
import './item.css'
import ProductItems from './productItems/ProductItems'
import SingleItem from './singleItem/SingleItem'
function Items() {
  return (
    <div className='item'>
      <ProductItems/>
      <SingleItem/>
    </div>
  )
}

export default Items