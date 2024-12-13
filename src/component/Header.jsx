import React from "react";
export default function Header(){
    return(
        <>
<section id="header-section">
<div className="container-fluid p-3 shadow header">
<h1 className="ms-4"><b><span className="text-warning">E</span>lectronic <span className="text-warning">M</span>art</b></h1>

<input type="text" placeholder="Search for product,brand and more.."  className="w-50 p-2 "></input>
<div className="icons me-5"><span className="bi bi-bag-heart fs-3 ms-3"></span>
<span className="bi bi-star-half fs-3 ms-3"></span>
<span className="bi bi-cart-fill fs-3 ms-3">Cart</span>
</div>
</div>
</section>



</>
)
}
