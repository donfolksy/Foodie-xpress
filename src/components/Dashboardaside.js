import React from 'react'
import Transaction from '../images/Vector 3.png'
import Johndoe from '../images/johndoe.png'
function Dashboardaside({cart, cartlength}){
    return(
        <aside>
            <div className="dash-1">
    <h4>Foodie Xpress</h4>
    <img src={Johndoe}></img>
    <h3>John Doe</h3>
    <p>johndoe@gmail.com</p>
    <button>Dashboard </button>
   <div className='transact'> <img src={Transaction}></img><h6>Transaction History</h6></div> 
    <h5> <i className="fa-solid fa-gear"></i> Settings</h5>
    <h5><i className="fa-solid fa-cart-shopping"></i> Cart({cartlength})</h5>
    <div className='logout'><h5><i className="fa-regular fa-arrow-right-from-bracket"></i>Logout</h5></div>
</div>
        </aside>
    )
}
export default Dashboardaside