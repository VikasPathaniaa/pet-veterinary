import React from 'react'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import ProductSection from '../components/ProductSection/ProductSection'
import Service from '../components/ServiceCategory/Service'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Service/>
    <ProductSection />
    <Footer/>
    </>
  )
}

export default Home