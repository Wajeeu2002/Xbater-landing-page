import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function WhyChoose () {
  
    return (
<div className='WhyChooseContainer'>

     <h1> Why choose xbater </h1>
     <span className='firstParagraph'>
    <p>Experience seamless peer to peer currency exchange. our platform help you</p>
    </span>
    <section className='containerWrapper'>
    <div className=' firstContainer'>
    
    <FontAwesomeIcon icon="fa-solid fa-money-bill-trend-up" size="xl"  style={{color: "#21008F",}} />
<p>
   
  Say goodbye to high fees and long wait times: With BarterFX, you can trade foreign currency at transparent prices and real-time exchange rates. No banks and third-party agents means no hidden fees or charges. Plus, our platform is designed to be secure and efficient, so you can trade FX with confidence.
     
</p>
    </div>
     <div className='secondContainer'>
      <FontAwesomeIcon icon="fa-solid fa-handshake-angle" size="xl" style={{color: "#21008F",}} />
    <p> you get the best deals, always; Our open approach to real-time exchange rate ensure that you're always trading at current market rate.
        creating a transparent pricing structure. this means that you always get the best deal on your trade 
       </p>
     </div>
<div className='thirdContainer'>
<FontAwesomeIcon icon="fa-solid fa-user-large-slash" style={{color: "#21008F",}}/>
   <p> 
   
    no more third party agent and artificial market rate. By eliminating intermediaries. BaterFx offers a transparent and a better trading experience.
    You can trust that you're getting a fair price on all trade.   
       </p>
    </div>
    </section>
     <section className='secondSection'>
      <div>
      <img className="detailsImg2" src= "/dist/images/phoneImg2.jpg" />
      </div>
      <div>
      <p className='paragraph3'>Trade Foreign Currency Directly with Buyers and Sellers -No Banks, No Service Charges, No Third-Party Agents.</p>
      <p className='paragraph4'>Introducing BarterFX - The Peer-to-Peer Foreign Exchange Trading Platform that Offers Transparent Pricing and Real-Time Exchange Rates. </p>
     <button disabled className='secondBtn'>Trade now</button>
</div>
    </section>
    
    
    
    </div>

    
  )
}