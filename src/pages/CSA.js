import React from 'react'
import Navbar from "../components/Navbar"

function CSA (){
    return(
    <div className="RAS-parent">
        <Navbar></Navbar>
    <h2>Customer Account Signup</h2>
    <h5>Signup for a New Account.</h5>
    <div className="CSA">
    <div className="CSA-body">
    <input className="CSA-name-input" type="search"  placeholder= " Full name" name="" id=""></input>
    <input className="CSA-phone-email" type="phone"  placeholder= " Phone No/Email" name="" id=""></input>

    <input className="CSA-password" type="password" placeholder=" Password"></input>
    <input className="password" type="password" placeholder=" Confirm-Password"></input>
        </div>
        
        <div className="CSA-butt">
        <button>Get Started</button>
        <p>By clicking this you agree to our terms of services and disclaimer</p>
        </div>
        </div>
    
    </div>
    )
    }
    
    
    export default CSA