    import React from 'react'
    import KFC from '../images/Rectangle 163.png'
    import Chicken from '../images/Rectangle 164.png'
    import Amala from '../images/Rectangle 165.png'
    import Kilimanjaro from '../images/Rectangle 166.png'
    import Ola from '../images/Rectangle 167.png'
    import Ofada from '../images/Rectangle 168.png'

    function Vendor(){
        return(

<div className="vendor">
        <h6>Vendors</h6>
    <div className='vendor-line'> </div>
    <div className='vendor-images'>
            
        <div className='vendor-img1'>
        <div> <img src={KFC}></img>
                <p>KFC </p> <span>87% (791)</span></div> 
            <div> <img src={Chicken}></img>
                <p>CHICKEN REPUBLIC</p>
        <span>87% (791)</span> </div>
        <div> <img src={Amala}></img>
            <p>AMALA SKY</p> <span>87% (791)</span>  </div>
            </div>
        
            <div className='vendor-img2'>
            <div> <img src={Kilimanjaro}></img>
            <p>Kilimanjaro </p> 
                <span>87% (791)</span></div>
            <div>  <img src={Ola}></img>
            <p>Ola Mummy</p> <span>87% (791)</span> </div>
            <div> <img src={Ofada}></img>
            <p>Ofada Kitchen</p> <span>87% (791)</span> </div>
            </div>

            <div className='vendor-img1'>
            <div> <img src={KFC}></img>
                <p>KFC </p> <span>87% (791)</span></div> 
            <div> <img src={Chicken}></img>
                <p>CHICKEN REPUBLIC</p>
        <span>87% (791)</span> </div>
        <div> <img src={Amala}></img>
            <p>AMALA SKY</p> <span>87% (791)</span>  </div>
            </div>
            <div className='vendor-img2'>
            <div> <img src={Kilimanjaro}></img>
            <p>Kilimanjaro </p> 
                <span>87% (791)</span></div>
            <div>  <img src={Ola}></img>
            <p>Ola Mummy</p> <span>87% (791)</span> </div>
            <div> <img src={Ofada}></img>
            <p>Ofada Kitchen</p> <span>87% (791)</span> </div>
            </div>
            <div className='vendor-img1'>
            <div> <img src={KFC}></img>
                <p>KFC </p> <span>87% (791)</span></div> 
            <div> <img src={Chicken}></img>
                <p>CHICKEN REPUBLIC</p>
        <span>87% (791)</span> </div>
        <div> <img src={Amala}></img>
            <p>AMALA SKY</p> <span>87% (791)</span>  </div>
            </div>
    </div>
    </div>
// </div>
        )

    }

    export default Vendor