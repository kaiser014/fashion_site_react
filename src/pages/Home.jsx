import React from 'react'
import Header from '../comonent/header/Header';
import Hero from '../comonent/hero-section/Hero';
import SufferedAlteration from '../comonent/suffered-alteration/SufferedAlteration';
import ProductMonth from '../comonent/product-month/ProductMonth';
import JewelleryAlteration from '../comonent/jewellery-alteration/JewelleryAlteration';
import FeaturedProduct from '../comonent/featured-product/FeaturedProduct';
import Testimonial from '../comonent/testimonial/Testimonial';
import Footer from '../comonent/footer/Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <SufferedAlteration />
        <ProductMonth />
        <JewelleryAlteration />
        <FeaturedProduct />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home;