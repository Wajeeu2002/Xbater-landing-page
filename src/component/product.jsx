

export default function Product() {
  return (
    <div className ="productContainer">
      
     <span className="spanImg">
      <img className="homeImg" src="./src/images/homeImg.jpeg"/>
      </span>
      <div className="productContent">
       <h1> Our Product</h1>
        <h4> Simple. Fair. Safe.</h4>
        <p>Introduce BarterFX, the foreign exchange trading platform that connects buyers and sellers directly, bypassing banks, service charges, and third-party agents.</p>
        <p>Our transparent pricing structure eliminates artificial exchange rates and provides you with the best deals on the market.</p>
        <p>With user-friendly interface, 24/7 customer support and built on the latest technology, BarterFX is perfect for individuals, businesses, and traders of all levels.</p>
        <button disabled className="productBtn"> start trading for free</button>
        </div>
        
    </div>
    
  )
}
