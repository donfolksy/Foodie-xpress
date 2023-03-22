import React from 'react'
import Dashboardaside from '../components/Dashboardaside'
import Dashboardnav from '../components/Dashboardnav'
import Fooddetails from '../components/Fooddetails'

function Dashfood() {
    
    return(
<div className='dash-parent'>
<Dashboardaside/>
<div className='holder'>
    <Dashboardnav/>
    <Fooddetails/>
</div>
 </div>
    )
}
export default Dashfood