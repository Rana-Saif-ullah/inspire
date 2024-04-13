import React from 'react'
import './home.css'
import ReviewSection from '../../components/homeComponents/ReviewSection'
import HeroSection from '../../components/homeComponents/HeroSection'
import Achivements from '../../components/homeComponents/Achivements'
import OurInspiration from '../../components/homeComponents/OurInspiration'
import ProductImgSection from '../../components/homeComponents/ProductImgSection'
import MainProductSection from '../../components/homeComponents/MainProductSection'
import FaqSection from '../../components/homeComponents/FaqSection'
import SSlider from '../../components/shared/sSlider/SSlider'
function Home() {
  return (
    <>
      <HeroSection/>
      <Achivements/>
      <OurInspiration/>
      <ProductImgSection/>
      <ReviewSection/>
      <MainProductSection/>
      <FaqSection/>
    </>
  )
}

export default Home