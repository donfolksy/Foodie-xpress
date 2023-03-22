import React from 'react'
import Navbar from "../components/Navbar"

function RAS (){
    return(
    <div className="RAS-parent">
        <Navbar></Navbar>
    <h2>Restaurant Account Signup</h2>
    <h5>Signup for a New Account.</h5>
    <div className="RAS">
    <div className="RAS-body">
    <input className="name-input" type="search"  placeholder= " Full name" name="" id=""></input>
    <input className="phone-email" type="phone"  placeholder= " Phone No/Email" name="" id=""></input>
  
    <input className="location" type="email"  placeholder= "Location" name="" id=""></input>

    <input className="password" type="password" placeholder=" Password"></input>
    <input className="password" type="password" placeholder=" Confirm-Password"></input>
        </div>
        
        <div className="RAS-butt">
        <button>Get Started</button>
        <p>By clicking this you agree to our terms of services and disclaimer</p>
        </div>
        </div>
    
    </div>
    )
    }
    
    
    export default RAS