import { useState } from 'react'
import './App.css';
//import your Icons
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {far}    from "@fortawesome/free-regular-svg-icons";


//import your component pages
import Nav from './component/Nav'
import Details from './component/Details'
import HowItWorks from './component/HowITWorks'
import Product from './component/product'
import WhyChoose from './component/WhyChoose'
import Footer from './component/footer'
import { library } from '@fortawesome/fontawesome-svg-core';


function App() {

  return (
    <>
     <Nav/>
     <Details/>
     <HowItWorks />
     <Product />
     <WhyChoose/>
     <Footer/>
    </>
  )
}

export default App;
library.add(fab,fas,far) 
