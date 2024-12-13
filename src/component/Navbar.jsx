import React from "react";
export default function Navbar(){
    return(

        <>

        {/* navbar section */}
        <section id="navbar-section">
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    {/* Dropdown for All Categories */}
    <div className="dropdown">
      <button
        className="btn btn-outline-light dropdown-toggle"
        type="button"
        id="categoriesDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        All Categories
      </button>
      <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
        <li>
          <a className="dropdown-item" href="#">
            Category 1
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Category 2
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Category 3
          </a>
        </li>
      </ul>
    </div>
    {/* Navbar Toggle for Mobile */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/* Navbar Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="electronicsDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Electronics
          </a>
          <ul className="dropdown-menu" aria-labelledby="electronicsDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Mobile Phones
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Laptops
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Televisions
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="appliancesDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Appliances
          </a>
          <ul className="dropdown-menu" aria-labelledby="appliancesDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Refrigerators
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Washing Machines
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Microwaves
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            New Arrivals
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-warning"
            href="#"
            id="pagesDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Pages
          </a>
          <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Page 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Page 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Page 3
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section>
 </>
    )
}