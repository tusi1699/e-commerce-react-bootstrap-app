import React from "react";
import television from '../assets/image/television.webp'
export default function Slider(){
    return(
        <>
{/* slider-section */}
<section id="slider-section">
<div className="container-fluid p-4  shadow">
<div className="row">
<div className="col-md-6">
 <p className="ms-5 mt-5"p-3>Get Flat <b className="fs-3">10%</b> Cashback</p> 
 <h1 className="ms-5 mt-4">EXCITING DEALS ON <br/> TELEVISIONS</h1>
 <button type="button" className="btn btn-lg p-2 w-25 text-white bg-warning ms-5 mt-4">Shop Now</button>  
</div>
<div className="col-md-6">
<img src={television} alt="television" className="img-fluid ms-5" />
</div>
</div>
</div>
</section>
 </>
 )
}