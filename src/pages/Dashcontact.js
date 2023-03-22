import React from 'react'
import Dashboardaside from "../components/Dashboardaside"
import Dashboardnav from "../components/Dashboardnav"
import { Contactdetails } from "../components/Contactdetails"
export function Dashcontact(){
    
    return(
<div className='dash-parent'>
<Dashboardaside/>
<div className='holder'>
    <Dashboardnav/>
    <Contactdetails/>
</div>
 </div>
    )
}