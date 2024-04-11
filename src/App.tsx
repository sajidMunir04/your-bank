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

function App() {

  return (
    <>
      <HeaderTemplate/>
      <MainBanner/>
      <ProductsLayout/>
      <UseCasesLayout/>
      <FeaturesLayout/>
      <FAQLayout/>
    </>
  )
}

export default App;
