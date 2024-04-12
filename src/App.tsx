import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTemplate from './components/shared/HeaderTemplate'
import MainBanner from './components/home/MainBanner'
import ProductsLayout from './components/home/ProductsLayout'
import UseCasesLayout from './components/home/UseCasesLayout'
import FeaturesLayout from './components/home/FeaturesLayout'
import FAQLayout from './components/home/FAQLayout'
import TestimonialLayout from './components/home/TestimonialLayout'
import PromotionalBanner from './components/shared/PromotionalBanner'
import FooterTemplate from './components/shared/FooterTemplate'

function App() {

  return (
    <>
      <HeaderTemplate/>
      <MainBanner/>
      <ProductsLayout/>
      <UseCasesLayout/>
      <FeaturesLayout/>
      <FAQLayout/>
      <TestimonialLayout/>
      <PromotionalBanner headingTextWhite='Start your financial journey with ' 
      headingTextColored='YourBank today!' buttonText='Open Account' description='Ready to take control of your finances? Join YourBank now, 
      and let us help you achieve your financial goals with our tailored solutions and 
      exceptional customer service'/>
      <FooterTemplate/>
    </>
  )
}

export default App;
