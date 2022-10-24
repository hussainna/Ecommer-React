import React from 'react'
import Author from '../author/Author'
import Cover from '../cover/Cover'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Products from '../products/Products'
import TopHome from '../topHome/TopHome'
import './home.css'
function Home() {
  return (
    <div className='home'>
      <TopHome/>
      <Header/>
      <Hero/>
      <Products/>
      <Cover/>
      <Author/>
      <Footer/>
    </div>
  )
}

export default Home