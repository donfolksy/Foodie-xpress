import React, { useContext } from 'react'
import { Navigate, redirect } from 'react-router-dom'
import Dashboardaside from '../components/Dashboardaside'
import Dashboardnav from '../components/Dashboardnav'
import Vendor from '../components/Vendor'
import { cartContext } from '../contexts/cartContext'

 function Dashboard() {
    // console.log(loggedIn)
    // if(loggedIn == false){
    //     <Navigate replace to="/login" />
    // }
    const {cart,cartlength} = useContext(cartContext)
    console.log(cart,cartlength)
    return(
        
        <div className="dash-parent">
            <Dashboardaside cart={cart} cartlength={cartlength}/>
        <div className='holder'>
            <Dashboardnav cart={cart} cartlength={cartlength}/>
            <Vendor/>
        </div>
        </div>
       
    )

}

export default Dashboard