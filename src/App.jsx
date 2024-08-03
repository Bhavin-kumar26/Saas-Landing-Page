import React from 'react'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import Features from './Components/Features'
import ProductShowcase from './Components/ProductShowcase'
import FAQ from './Components/FAQ'
import CallToAction from './Components/CallToAction'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Features/>
      <ProductShowcase/>
      <FAQ/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default App