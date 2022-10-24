import React from 'react'
import BestSelers from './bestSellers/BestSelers'
import Categories from './categories/Categories'
import './sidebar.css'
function Sidebar() {
  return (
    <div className='HomeSidebar'>
      <Categories/>
      <BestSelers/>
    </div>
  )
}

export default Sidebar