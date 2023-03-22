import React from 'react'
import map from '../images/Rectangle 241.png'
export function Contactdetails(){
    return(
        <div className="contact-holder">
          <div className='con-holder'>
            <h5>Contact Details</h5>
            <div className="contact-line"></div>
            <div className="contact-name">
         <p>Full name<p> </p>John Doe</p>
        <p>Email<p>   </p>johndoe@gmail.com</p>
        <p>Mobile<p>  </p>+23408135674873</p>
      </div>
      <div className="contact-line"></div>
      <h5>Delivery Address</h5>
      <div className="contact-line"></div>
      <section className="contact-address">
        <div className="con-add">
    <p>Street Address</p>
         <form>
          <input type="text" id="address"></input>
         </form>
    <p>House No</p>
    <form>
          <input type="text" id="address"></input>
         </form>
        <p>Add label</p>
        <div className="three-buttons">
        <form>
        <input type="text"   placeholder="Home" id="label"></input>
        <input type="text" placeholder="Office" id="label"></input>
        <input type="text"  placeholder="Other" id="label"></input>
         </form>
</div>  
        </div>
        <div className="map">
          <img src={map}></img>
        </div>
      </section>
      <div className="contact-line"></div>
      <h5>Payment Method</h5>
      <div className="contact-line"></div>
      <div id='pay-now'>
      <p>Pay now</p>
      <button>Pay with One Click-Master Card,Visa and Verve</button>
      <button>Pay with Bank Transfer or USSD</button>
      <p>Pay now</p>
      <button>Pay on Delivery</button>
      </div>
      <div className="contact-line"></div>
      <div className='sub-total'>
       <div className='sub'> <p>Subtotal</p> <p> ₦2,300.00</p></div>
       <div className='sub'> <p>Delivery fee </p> <p>₦450.00</p> </div>
       <div className='sub'>  <p>Including VAT</p> <p> ₦171.63</p></div>
       <div className='sub'>  <p>Total </p> <p>₦3,100.63</p></div>
      </div>
      <div className='order-butt'>
      <button>PLACE ORDER NOW</button>
      </div>
      </div>
    </div>
    )
}