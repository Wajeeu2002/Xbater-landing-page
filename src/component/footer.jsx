import  {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




export default function Footer () {
    const d = new Date() ;
    const year = d.getFullYear();
    const  [date, setDate] = useState(year);

   
    
    return (
    <div className='footerContainer'>
        
        <p className='footerParagraph'>Coming soon!!!</p>  
        
       <button className='btnIcon' disabled>Download on the <p><FontAwesomeIcon icon="fa-brands fa-apple" size='xl' />App Store</p> </button>
       <button className='btnIcon2' disabled>Get on <p><FontAwesomeIcon icon="fa-brands fa-google-play" size='xl' className='icon2'/>Google play</p> </button>
       <p style={{marginLeft:"1.7em"}}>Get Started </p> 
        <div  className='footerContent'>
       <p>Our Products</p>
         <p>How it works</p>
         <p>About us </p>
         <p>Contact</p>
      </div>
      
 
 <p style={{marginLeft:"1.7em"}}> ©{date} Xbarter. All right reserved</p> 
    </div>
  )
}
