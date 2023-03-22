import React from 'react'
import Peace from '../images/peace.png'
function Dashboardnav ({cart, cartlength}){
    return(
        <div className='dash-2'>

        <div id='id-dash'> <h2>Dashboard</h2> 
        <div className='dash-icons'>
        <i className="fa-solid fa-cart-shopping">({cartlength})</i>
        <i className="fa-regular fa-envelope-circle-check"></i>
        <i className="fa-solid fa-bell"></i> </div>
        </div>
        <h3>Hello Christiana <img src={Peace}></img> </h3>
        <h4>Order your meal from various restaurants around Ibadan</h4>
        <div className='boarder'>
         </div> 
         </div> 
    )
}
export default Dashboardnav