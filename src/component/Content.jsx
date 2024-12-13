import React from "react";
import mob from '../assets/image/mob.png'
import ref from '../assets/image/ref.png'
import headphone from '../assets/image/headphone.png'
import tv from '../assets/image/tv.png'
import ac from '../assets/image/ac.png'
import oven from '../assets/image/oven.png'
import cooler from '../assets/image/cooler.png'
import wm from '../assets/image/wm.png'
import wp from '../assets/image/wp.png'
import ek from '../assets/image/ek.png'
import iron from '../assets/image/iron.png'
import mixer from '../assets/image/mixer.png'
import sw from '../assets/image/sw.png'
import dryer from '../assets/image/dryer.png'
import cooktop from '../assets/image/cooktop.png'
import off1 from '../assets/image/off1.png'
import phone from '../assets/image/phone.png'
export default function Content(){
    return(
        <>
        {/*content-section */}
<section id="content-section">
  <div className="New-Product">
<div className="container-fluid">
  <h1 className="text-center mt-5">Our <b>New Product</b></h1>
<div className="row">
<div className="col-md-3 offer">
    {/* Reviews */}
  <h3 className="ms-3 mt-4"><b>Customer Review</b></h3>
<div className="icon5">
  <span className="bi bi-star-fill text-warning fs-5 ms-3"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2 me-3"></span>
  5.0  
</div>
<div className="icon4">
  <span className="bi bi-star-fill text-warning fs-5 ms-3"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2 me-3"></span>
  4.0  
</div>
<div className="icon3.5">
  <span className="bi bi-star-fill text-warning fs-5 ms-3"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2"></span>
  <span className="bi bi-star-half text-warning fs-5 ms-2 me-3"></span>
  3.5  
</div>
<div className="icon3.5">
  <span className="bi bi-star-fill text-warning fs-5 ms-3"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2 me-3"></span>
  3.0 
</div>
<div className="icon3.5">
  <span className="bi bi-star-fill text-warning fs-5 ms-3"></span>
  <span className="bi bi-star-fill text-warning fs-5 ms-2"></span>
  <span className="bi bi-star-half text-warning fs-5 ms-2 me-3"></span>
  2.5
</div>
{/* price */}
<h3 className="ms-3 mt-4"><b>Price</b></h3>
<p className="ms-3 mt-1">Under $1,000<br/>
$1,000 - $5,000<br/>
$5,000 - $10,000<br/>
$10,000 - $20,000<br/>
$20,000 $30,000<br/>
Over $30,000</p>
{/* Discount */}
<h3 className="ms-3 mt-4"><b>Discount</b></h3>
<p className="ms-3 square "><span className="bi bi-square "> 5% or More</span><br/>
<span className="bi bi-square  "> 10% or More</span><br/>
<span className="bi bi-square "> 20% or More</span><br/>
<span className="bi bi-square "> 30% or More</span><br/>
<span className="bi bi-square "> 50% or More</span><br/>
<span className="bi bi-square "> 60% or More</span></p>
{/* Electronics */}
<h3 className="ms-3 mt-4"><b>Electronics</b></h3>
<p className="ms-3 square "><span className="bi bi-square "> Accessorie</span><br/>
<span className="bi bi-square  "> Cameras & Photography </span><br/>
<span className="bi bi-square "> Car & Vehicle Electronics</span><br/>
<span className="bi bi-square "> Computers & Accessories</span><br/>
<span className="bi bi-square "> GPS & Accessories</span><br/>
<span className="bi bi-square "> Headphones </span><br/>
<span className="bi bi-square "> Home Audio </span><br/>
<span className="bi bi-square "> Home Theater, TV & Video</span><br/>
<span className="bi bi-square "> Mobiles & Accessories</span><br/>
<span className="bi bi-square "> Portable Media Players </span><br/>
<span className="bi bi-square "> Tablets </span><br/>
<span className="bi bi-square "> Telephones & Accessories</span><br/>
<span className="bi bi-square "> Wearable Technology </span><br/>
</p>
{/* {cash on delivery/*  */} 
<h3 className="ms-3 mt-4"><b>Cash On Delivery</b></h3>
<p className="ms-3 square "><span className="bi bi-square "> Eligible for Cash On Delivery</span></p>
{/* New Arrivals */}
<h3 className="ms-3 mt-4"><b>New Arrivals</b></h3>
<p className="ms-3 square "><span className="bi bi-square "> Last 30 days</span><br/>
<span className="bi bi-square "> Last 90 days</span>
</p>
{/* best-saller */}

<h3 className="ms-3 mt-4"><b>Best Seller</b></h3>
<div className="best-saller">
<div className="mobile">
  <img src={mob} alt="mob" className="img-fluid ms-3 " />
  <p className="ms-4">samsung phone<br/>
  (Laser Grey ,128GB)<br/>
  (6 GB RAM)<br/>
  <b>$ 12,990.00</b>
    </p>
</div>
{/* ref */}
<div className="refe">
  <img src={ref} alt="ref" className="img-fluid ms-3  mt-4" />
  <p className="ms-4 mt-4">samsung 192 L Direct<br/>
  Cool Single Door 3 Star<br/>
  (2021) Refrigerator<br/>
  <b>$ 12,499.00</b>
    </p>
</div>
{/* headphone */}
<div className="headph">
  <img src={headphone} alt="headphone" className="img-fluid ms-3  mt-4" />
  <p className="ms-4 mt-4">Boat Rocket 450<br/>
  Bluetooth Headset<br/>
  (Luscious Black,on the ear)<br/>
  <b>$ 1,199.00</b>
    </p>
</div>
</div>
</div>


{/* products */}
<div className="col-md-9">
<div className="product1 mt-4">
<div className="col-md-3 border border-2 ms-5 mt-3 ">
<img src={tv} alt="tv" className="img-fluid mt-3" />
<p className="text-center">Mi 4A Horizon<br/>
<b className="fs-5">$499.00 </b><del>$699.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-4 mb-3">ADD TO CART</button>
</div>
{/* ac */}
<div className="col-md-3 border border-2 ms-5 mt-3">
<img src={ac} alt="ac" className="img-fluid" />
<p className="text-center">Smart AC with Wi-fi<br/>
<b className="fs-5">$699.00 </b><del>$799.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-4">ADD TO CART</button>
</div>
{/* oven */}
<div className="col-md-3 border border-2 ms-5 mt-3">
<img src={oven} alt="oven" className="img-fluid" />
<p className="text-center">MicroWave Oven<br/>
<b className="fs-5">$399.00 </b><del>$499.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-4">ADD TO CART</button>
</div>
</div>

{/* product2 */}
<div className="product1 mt-5">
<div className="col-md-3 border border-2 ms-5 ">
<img src={cooler} alt="cooler" className="mt-3  cooler " />
<p className="text-center  mt-3">Desert Air Cooler<br/>
<b className="fs-5">$230.00 </b><del>$280.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-5 mb-3">ADD TO CART</button>
</div>
{/* washing-machine */}
<div className="col-md-3 border border-2 ms-5 mt-2">
<img src={wm} alt="wm" className="img-fluid  mt-4 washing-m" />
<p className="text-center mt-3">Auto Washing Machine<br/>
<b className="fs-5">$180.00 </b><del>$200.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-4">ADD TO CART</button>
</div>
{/* water-purifier */}
<div className="col-md-3 border border-2 ms-5 mt-2">
<img src={wp} alt="wp" className="img-fluid water-p mt-4" />
<p className="text-center">water Purifier<br/>
<b className="fs-5">$199.00 </b><del>$299.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-4">ADD TO CART</button>
</div>
</div>
{/* product3 */}
<div className="product1 mt-5">
<div className="col-md-3 border border-2 ms-5 ">
<img src={ek} alt="ek" className="mt-3  " />
<p className="text-center  mt-3">Pigeon Electric Kettle<br/>
<b className="fs-5">$299.00 </b><del>$499.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-5 mb-3">ADD TO CART</button>
</div>
{/* washing-machine */}
<div className="col-md-3 border border-2 ms-5 mt-2">
<img src={iron} alt="iron" className="img-fluid  mt-4 " />
<p className="text-center mt-3">Dry Iron Nova<br/>
<b className="fs-5">$349.00 </b><del>$399.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-4">ADD TO CART</button>
</div>
{/* water-purifier */}
<div className="col-md-3 border border-2 ms-5 mt-2">
<img src={mixer} alt="mixer" className="img-fluid  mt-4" />
<p className="text-center mt-4">Mixer Grinder<br/>
<b className="fs-5">$499.00 </b><del>$599.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-4">ADD TO CART</button>
</div>
</div>

{/* product-4 */}
<div className="product1 mt-5">
<div className="col-md-3 border border-2 ms-5  ">
<img src={sw} alt="sw" className="mt-3 smartwatch  " />
<p className="text-center  mt-3">Pigeon Electric Kettle<br/>
<b className="fs-5">$299.00 </b><del>$499.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-5 mb-3">ADD TO CART</button>
</div>
{/* washing-machine */}
<div className="col-md-3 border border-2 ms-5 mt-2">
<img src={dryer} alt="dryer" className="img-fluid  mt-4 " />
<p className="text-center mt-3">Dry Iron Nova<br/>
<b className="fs-5">$349.00 </b><del>$399.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-4">ADD TO CART</button>
</div>
{/* water-purifier */}
<div className="col-md-3 border border-2 ms-5 mt-2">
<img src={cooktop} alt="cooktop" className="img-fluid  mt-4" />
<p className="text-center mt-4">Mixer Grinder<br/>
<b className="fs-5">$499.00 </b><del>$599.00</del></p>
<button type="button" className="btn btn-lg text-white p-2 w-75  ms-4">ADD TO CART</button>
</div>
</div>
</div>
</div>
</div>
</div>



{/* testimonial-section */}
<div className="container-fluid  new-arrival">
  <div className="row">
<div className="col-md-5 bg-white m-5  offer-watch">
  <p className="mt-5 ms-3">New Collection, New Trendy<br/>
    <b className="fs-4">Smart Watches</b><br/>
    sale up to 25% off all in store
  </p>
  <img src={off1} alt="off1" className="img-fluid off1" />

</div>

<div className="col-md-5 bg-white m-5  offer-watch">
  <p className="mt-5 ms-3">New Collection, New Trendy<br/>
    <b className="fs-4 mt-5 ">Smart Phones</b><br/>
    sale up to 25% off all in store
  </p>
  <img src={phone} alt="phone" className="img-fluid off1" />
</div>
</div>
</div>


{/* Electronics */}
<div className="container  mt-5 ">
  <h3 className="fs-3"><b>Electronics :</b></h3>
  <p>If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets and iPads, video games, desktop computers, cameras and camcorders, 
    audio, video and more.   </p>

<div className="electronics" >
<div className="col-md-4">
<div className="shiped mt-5">
<div className="icon">
  <span className="bi bi-cart-fill fs-1 text-warning "></span>
</div>
<div className="info ms-4">
 <b className="fs-3">Free Shipping</b><br/>
 <p>on orders over $100</p>
</div>
</div>
</div>
<div className="col-md-4">
<div className="shiped mt-5">
<div className="icon">
  <span className="bi bi-truck-front-fill fs-1 text-warning "></span>
</div>
<div className="info ms-4">
 <b className="fs-3">Fast Delivery</b><br/>
 <p>World Wide</p>
</div>
</div>
</div>
<div className="col-md-4">
<div className="shiped mt-5">
<div className="icon">
  <span className="bi bi-hand-thumbs-up-fill   fs-1 text-warning "></span>
</div>
<div className="info ms-4">
 <b className="fs-3">Big Choice</b><br/>
 <p>of Products</p>
 </div>
</div>
</div>
</div>
</div>
</section>


        
        </>


    )
}