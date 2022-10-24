import React from 'react'
import './header.css'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineUser, AiOutlineHeart} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
function Header() {
  return (
    <header>
        <div className="cont S-flex">
            <span className="logo">Anon</span>
            <div className="search">
                <input type="text" placeholder='Enter Your Product Name' />
                <i><BiSearch/></i>
            </div>
            <div className="headerIcons">
                <div className="headerIconsItem">
                    <i><AiOutlineUser/></i>
                </div>
                <div className="headerIconsItem">
                    <i><AiOutlineHeart/></i>
                    <span>0</span>
                </div>
                <div className="headerIconsItem">
                    <i><BsBag/></i>
                    <span>0</span>
                </div>
                
            </div>
        </div>
    </header>
  )
}

export default Header