import React from "react";
export default function Footer(){
    return(
        <>
        {/* Footer-section */}
        <section id="Footer-section">

<div className="container-fluid bg-dark">
<div className="row">
<div className="col-md-4">
   <h3 className="text-white mt-3  ms-5">Categories</h3> 
   <p className="text-white   mt-2  ms-5">Mobiles<br/>
Computers<br/>
TV, Audio<br/>
Smartphones<br/>
Washing Machines<br/>
Refrigerators</p>
</div>
<div className="col-md-4">
    <h3 className="text-white mt-3">Quick Links</h3>
    <p className="text-white mt-2 ">About Us<br/>
Contact Us<br/>
Help<br/>
Faqs<br/>
Terms of use<br/>
Privacy Policy</p>
</div>
<div className="col-md-4">
    <h3 className="text-white mt-3">Get in Touch</h3>
    <p className="text-white mt-3"> <span className="bi bi-geo-alt-fill text-white"></span> Mkc, 123 Sebastian, USA.<br/>
<span className="bi bi-phone"></span> 12 2345 67901<br/>
<span className="bi bi-telephone-fill"></span>+11 3672 1890<br/>
<span className="bi bi-envelope-arrow-down-fill"></span> mail 1@example.com<br/>
<span className="bi bi-envelope-arrow-down-fill"></span> mail 2@example.com</p>
</div>
<hr className="border border-2 border-white mt-4"/>
<p className="text-white fs-5 text-center">© 2021 Electronics Mart. All rights reserved </p>


</div>
</div>
</section>
        </>
    )
}