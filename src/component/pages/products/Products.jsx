import React from 'react'
import Items from './items/Items'
import './products.css'
import Sidebar from './sidebar/Sidebar'
function Products() {
  return (
    <div className='container'>
        <Sidebar/>
        <Items/>
    </div>
  )
}

export default Products